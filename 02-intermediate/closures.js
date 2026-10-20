function makeCounter() {
    let count = 0;
    return {
        increment() { count++; return count; },
        reset() { count = 0; },
    };
}

const a = makeCounter();
const b = makeCounter();
a.increment();
a.increment();
b.increment();