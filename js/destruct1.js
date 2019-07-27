var a, b, rest;

// MDN Default Parameter rest=1
[a, b, rest=1] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

console.log(rest);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]