const numbers = [3,8,1,9,4];

const result = numbers
    .filter(n => n > 3)
    .map(n => n * n);

console.log(result);