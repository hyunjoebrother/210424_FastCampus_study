import getType from "./getType";
import random from "./getRandom";

// 데이터 타입

console.log(typeof "hello world");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

// function getType(data) {
//   //   return Object.prototype.toString.call(data);
//   return Object.prototype.toString.call(data).slice(8, -1);
// }

console.log(getType(123));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));

// 산술 연산자 (arithmetic operator)

console.log(1 + 2);
console.log(5 - 2);
console.log(3 * 4);
console.log(17 / 3);
console.log(13 % 4);

// 할당 연산자 (assignment operator)

let a = 2;
// a = a + 1;
a += 1;

console.log(a);

// 비교 연산자 (comparison operator)
const c = 1;
const d = 1;

console.log(c === d);

function isEqual(x, y) {
  return x === y;
}

console.log(isEqual(4, 7));
console.log(2, "2");

console.log(c !== d);
console.log(c < d);

// 논리 연산자 (logical operator)
const e = 1 === 1;
const f = "AB" === "AB";
const g = true;

console.log(e);
console.log(f);
console.log(g);

console.log("&&: ", e && f && g);
console.log("||: ", e || f || g);
console.log("!: ", !e);

// 삼항 연산자 (ternary operator)
const i = 1 < 2;

if (i) {
  console.log("참");
} else {
  console.log("거짓");
}

console.log(a ? "참" : "거짓");

// If else 조건문

const ran = random();

if (ran == 0) {
  console.log("is 0");
} else if (a === 2) {
  console.log("2이다");
} else if (a === 4) {
  console.log("4이다");
} else {
  console.log("rest...");
}

// Switch 조건문

switch (ran) {
  case 0:
    console.log("is 0");
    break;
  case 2:
    console.log("is 2");
    break;
  case 4:
    console.log("is 4");
    break;

  default:
    console.log("rest...");
}

// For 반복문
const ulEl = document.querySelector("ul");
for (let i = 0; i < 3; i += 1) {
  console.log(i);
  const li = document.createElement("li");
  li.textContent = `list-${i + 1}`;

  if ((i + 1) % 2 == 0) {
    li.addEventListener("click", function () {
      console.log(li.textContent);
    });
  }

  ulEl.appendChild(li);
}

// 변수 유효범위 (Variable Scope)

function scope() {
  if (true) {
    const aaa = 123;
    console.log(aaa);
  }
}
scope(aaa);

// 형 변환 (Type Conversion)

const A = 1;
const B = "1";

console.log(A === B);
console.log(A == B);

if (true) {
  console.log(123);
}

if ("false") {
  console.log(123);
}

if (undefined) {
  console.log(123);
}
