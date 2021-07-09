//// Ch3. JS 함수부터 시작

function sum(x, y) {
  console.log(x);
  if (x < 2) {
    return;
  }
  return x + y;
}

const a = sum(1, 3);

console.log(a);
console.log(sum(2, 4));

function sum() {
  console.log(arguments);
  return arguments[0] + arguments[1];
}

// 화살표 함수
const double = function (x) {
  return x * 2;
};

console.log("double: ", double(7));

const doubleArrow = (x) => {
  return x * 2;
};

const doubleArrow = (x) => x * 2;
const doubleArrow = (x) => ({
  name: "Mei",
});

console.log("doubleArrow: ", doubleArrow(7));

// IIFE (즉시 실행 함수)
const ii = 7;
function double() {
  console.log(ii * 2);
}
double();

(function () {
  console.log(ii * 2);
})();

// 호이스팅 (Hoisting)
const h = 7;

double();

function double() {
  console.log(h * 2);
}

// 타이머 함수

setTimeout(function () {
  console.log("Yo!");
}, 3000);

const timer = setTimeout(() => {
  console.log("Yo!");
}, 3000);

const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
  clearTimeout(timer);
});

const timer2 = setInterval(() => {
  console.log("yoyoyo");
});

const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
  clearInterval(timer2);
});

// 콜백
function timeout(cb) {
  setTimeout(() => {
    console.log("meimei");
    cb();
  }, 3000);
}

timeout(() => {
  console.log("done"); // 먼저 실행되고 그 후에 3초 후에 진행
});

console.log("end"); // 먼저 실행되고 그 후에 3초 후에 진행
