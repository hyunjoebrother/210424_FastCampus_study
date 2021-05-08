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