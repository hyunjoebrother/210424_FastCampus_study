import getType from "./getType";

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
