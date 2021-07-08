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
