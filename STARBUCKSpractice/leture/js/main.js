// class가 search인 요소를 찾아보자
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused'); // class 추가 -> css 작업 가능
    searchInputEl.setAttribute('placeholder', '통합검색'); // HTML 속성 지정
});

searchInputEl.addEventListener('blur', function() { // focus 해제
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


// 스크롤 내리면 배너 사라짐
const badgeEl = document.querySelector('header .badges');
// 브라우저 창 window, 우리가 보고 있는 화면 자체
// window.addEventListener('scroll', function() {
//     console.log('scroll!'); // scroll할 때마다 출력
// });    
window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 위치 기준으로 배지 숨기기
        //badgeEl.style.display = 'none';
        //gsap.to(요소, 지속시간s, 옵션);
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none' // 진짜 요소 제거됨
        });
    } else {
        //badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            displat : 'block'
        });
    }
}, 300 ));// 0.3s마다 함수 다수 실행 부하 (실행 함수 제한 -> 숫자 천천히 출력) 

// _.throttle(함수, ms단위로 시간 추가)


// 배너 없어지는 부자연스러워서 애니메이션 추가


// 사진들이 시간차로 뜨도록 애니메이션 추가
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    //gsap.to(요소, 지속시간s, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index+1) * .7, // 현재 fade-in 클래스 4개 -> 0.7, 1.4, 2.1, 2.8초 후 동작
        opacity: 1
    });
});



// 공지사항 swiper 작업 - new Swiper(선택자, 옵션)

new Swiper('.notice-line .swiper-container', {
    direction : 'vertical',
    autoplay : true, // 슬라이드 자동 재생 여부
    loop : true // 반복 재생 여부
});

new Swiper('.promotion .swiper-container', {
    // 한 번에 총 3개의 슬라이드가 보이도록
    slidesPerView : 3,
    spaceBetween : 10, // 슬라이드 사이 여백
    centerdSlides : true, // 1번 슬라이드가 가운데에 보이도록
    loop : true,
    autoplay : {
        // 옵션 추가 5초
        delay : 5000
    },

    pagination : {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable : true // 사용자의 페이지 번호 요소 제어 가능 여부
    },

    navigation : {
        prevEl : '.promotion .swiper-prev',
        nextEl : '.promotion .swiper-next'
    }
});