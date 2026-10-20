function memoize(fn) {
    const cache = new Map();
    return (arg) => {
        if (cache.has(arg)) return cache.get(arg);
        const result = fn(arg);
        cache.set(arg, result);
        return result;
    };
}

function slowSquare(n) {
    for (let i = 0; i < 1e9; i++) {}
    return n * n
}

const fastSquare = memoize(slowSquare);

console.time("first call");
console.log(fastSquare(9));
console.timeEnd("first call");

console.time("second call");
console.log(fastSquare(9));
console.timeEnd("second call");

function debounce(fn, delay) {
    let timer;
    return(...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    }
}

const log = debounce((msg) => console.log("ran with:", msg), 300);

log("a");
log("b");
log("c");
log("d");
log("e");