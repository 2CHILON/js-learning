console.log("1: sync start");

setTimeout(() => console.log("5: setTimeout 100ms"), 100);
setTimeout(() => console.log("4: setTimeout 0ms"), 0);

Promise.resolve().then(() => console.log("2: promise.then"));
queueMicrotask(() => console.log("3: queuMicrotask"));

console.log("1b: sync end");
