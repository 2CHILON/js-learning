function delay(ms, value) {
    return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

console.time("parallel");
const results = await Promise.all([
    delay(500, "task A"),
    delay(300, "task B"),
    delay(200, "task C"),
]);

console.timeEnd("parallel");

console.log(results);