// function add(a, b) { return a + b; }

// const add2 = function (a, b) { return a + b; };

// const add3 = (a, b) => a + b;

function greet(name = "friend") { return `Hi ${name}`; }

function sum(...nums) {
    return nums.reduce((total, x) => total + x, 0);
}
sum(1, 2, 3);