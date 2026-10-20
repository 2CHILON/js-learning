function repeat(times, action) {
    for (let i = 0; i < times; i++) action(i);
}
repeat(3, (i) => console.log("run", i))

function myMap(arr, fn) {
    const result = [];
    for (const item of arr) result.push(fn(item));
    return result;
}