console.log("1: start");

setTimeout(() => console.log("2: timeout"), 0);

Promise.resolve().then(() => console.log("3: promise"));

console.log("4: end");