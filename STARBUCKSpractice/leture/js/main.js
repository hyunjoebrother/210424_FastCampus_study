// class가 search인 요소를 찾아보자
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused"); // class 추가 -> css 작업 가능
  searchInputEl.setAttribute("placeholder", "통합검색"); // HTML 속성 지정
});

searchInputEl.addEventListener("blur", function () {
  // focus 해제
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 스크롤 내리면 배너 사라짐
const badgeEl = document.querySelector("header .badges");
// 브라우저 창 window, 우리가 보고 있는 화면 자체
// window.addEventListener('scroll', function() {
//     console.log('scroll!'); // scroll할 때마다 출력
// });
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 위치 기준으로 배지 숨기기
      //badgeEl.style.display = 'none';
      //gsap.to(요소, 지속시간s, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none", // 진짜 요소 제거됨
      });
    } else {
      //badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        displat: "block",
      });
    }
  }, 300)
); // 0.3s마다 함수 다수 실행 부하 (실행 함수 제한 -> 숫자 천천히 출력)

// _.throttle(함수, ms단위로 시간 추가)

// 배너 없어지는 부자연스러워서 애니메이션 추가

// 사진들이 시간차로 뜨도록 애니메이션 추가
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간s, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 현재 fade-in 클래스 4개 -> 0.7, 1.4, 2.1, 2.8초 후 동작
    opacity: 1,
  });
});

// 공지사항 swiper 작업 - new Swiper(선택자, 옵션)

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true, // 슬라이드 자동 재생 여부
  loop: true, // 반복 재생 여부
});

new Swiper(".promotion .swiper-container", {
  // 한 번에 총 3개의 슬라이드가 보이도록
  slidesPerView: 3,
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데에 보이도록
  loop: true,
  autoplay: {
    // 옵션 추가 5초
    delay: 5000,
  },

  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },

  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

// 프로모션 토글 작업
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false; // 어느 순간에서 값이 false에서 다른 걸로 할당 될 수 있음

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; // 어떤 특정 값의 반대에 해당하는 값을 반환
  if (isHidePromotion) {
    // 숨김 처리 로직
    promotionEl.classList.add("hide");
  } else {
    // 보임 처리
    promotionEl.classList.remove("hide");
  }
});

// YOUTUBE 위에 떠다니는 애들 작업

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size, // y축으로 얼마만큼 이동할지
    repeat: -1, // 반복 횟수 -> 무한
    yoyo: true, // 한번 재생된 애니메이션 다시 작동
    ease: Power1.easeInOut, // 애니메이션 속도 조절 함수 옵션
    delay: random(0, delay), // 초동안 잠시 멈추고 다시 애니메이션 실행
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// 스크롤 애니메이션 JS
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new // method 모음
  ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 감시하고 있는 요소가 0.8 지점에서 판단될 것인지
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

// 하단 AWARDS swiper 작업
new Swiper(".awards .swiper-container", {
  direction: "horizontal", // 기본임
  autoplay: true,
  loop: true,
  spaceBetween: 30, // 여백
  slidesPerView: 5, // 하나의 화면에 보여지는 슬라이드 수

  // 화살표 선언
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});
