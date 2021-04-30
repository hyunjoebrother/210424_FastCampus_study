// console.log('connect lol');

// let fruits = ['Apple', 'Banana', 'Cherry'];
// // fruits라는 변수

// console.log(fruits[0]); // 0번째 item에 접근해서 console.log로 출력
// console.log(fruits[1]);
// console.log(fruits[2]);

// // getDay()라는 Method
// console.log(new Date('2021-01-30').getDay()); // 6, 토요일
// console.log(new Date('2021-01-31').getDay()); // 0, 일요일
// console.log(new Date('2021-02-01').getDay()); // 1, 월요일


// // 자료형 1. String (문자 data) -> 띠옴표 사용
// let myName = "Mei";
// let email = 'clara_31@naver.com';
// let hello = `Hello ${myName}?!`

// console.log(myName);
// console.log(email);
// console.log(hello);


// // 자료형 2. Number (숫자 data) -> 정수 및 부동소수점 숫자
// let number = 123;
// let opacity = 1.57;

// console.log(number);
// console.log(opacity);


// // 자료형 3. Boolean (논리 data) -> True & False
// let checked = true;
// let isShow = false;

// console.log(checked);
// console.log(isShow);


// // 자료형 4. Undefined -> 값이 할당되지 않은 상태를 나타냄
// let undef; // 값이 없음
// let obj = {abc : 123}; // abc라는 속성에 숫자 값 넣어주는 객체 {}

// console.log(undef); // undefined
// console.log(obj.abc); // abc라는 속성의 값은 무엇인가 123
// console.log(obj.xyz); // undefined


// // 자료형 5. Null -> 어떤 값이 의도적으로 비어있음을 의미
// let empty = null;
// console.log(empty);


// // 자료형 6. Object : 객체 data -> 여러 data를 { : } 형태로 저장
// let user = {
//     name : 'Mei', // 문자 data
//     age : 17, // 숫자 data
//     inValid : true // bool data
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.inValid);
// console.log(user);


// // 자료형 7. Array : 배열 data -> 여러 data를 순차적으로 저장
// let fruits = ['Apple', 'Banana', 'Cherry'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// // 변수, 예약어

// let a = 2; // 변수 선언
// let b = 5;

// console.log(a+b);

// let a = 12; 
// console.log(a); // 12

// a = 999; // let으로 변수 선언 -> 값의 재할당 가능
// console.log(a);

// const a = 12;
// console.log(a); // 12

// b = 999;
// console.log(b); // Error -> 값의 재할당 불가능!


// // 예약어 - 이미 이름, 특별한 의미 있어서 사용 불가
// let this = 'Hi';
// let 1f = 123;
// let break = true;

// // 함수

// // 함수 선언
// function helloFunc() { 
//     // 명령
//     console.log(1234);
// }
// // 함수 호출
// helloFunc(); // 1234

// function returnFunc()
// {
//     return 123; // 특정 값 반환
//     // return : 함수 밖으로 내보냄
// }

// let a = returnFunc();
// console.log(a); // 123

// function sum(a,b) { // a와 b는 매개변수 Parameters
//     return a+b;
// }
// // 재사용
// let a = sum(1,2); // 1과 2는 인수 Arguments
// let b = sum(7,12);
// let c = sum(2,4);

// console.log(a,b,c); // 3, 19, 6

// // 기명 (이름이 있는) 함수
// function hello() {
//     console.log('Hello~');
// }
// // 익명 (이름이 없는) 함수
// 함수 선언 x 함수 표현!
// let world = function () {
//     console.log('Word~');
// }
// hello();
// world();

// // 객체 data 
// const mei = {
//     // 속성
//     name : 'MEI',
//     age : 17,
//     // 메소드 Method (속성 아님/ 속성 부분에 함수라는 data)
//     getName: function () {
//         return this.name;
//         // this : 소속되어있는 객체 data를 의미
//     }
// };

// const hisName = mei.getName();
// console.log(hisName); // MEI
// console.log(mei.getName()); // MEI


// // 조건문
// let isShow = true; // bool data
// let checked = false;

// if (isShow) {
//     console.log('Show!'); // Show!
// }

// if (checked) {
//     console.log('Checked!');
// }

// let isShow = true; // 만약 false -> Hide 출력

// if (isShow) {
//     console.log('Show!!!!'); // 출력
// } else {
//     console.log('Hide?');
// }


// DOM API
