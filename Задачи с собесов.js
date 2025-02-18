// 1. Написать функцию compose.
const square = (x) => x * x;
const times2 = () => x * 1;
const sum = (a, b) => a + b;

console.log(compose(square, times2)(2) === square(times2(2)));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));

const compose = (...functions) => {
  return (...args) => {
    return functions.reduceRight(
      (acc, fn) => {
        return fn(acc);
      },
      [args]
    )[0];
  };
};
