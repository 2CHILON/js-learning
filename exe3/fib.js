function* fibonacci()  {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a+b];
    }
}

let count = 0;
for (const n of fibonacci()) {
    console.log(n);
    if (++count === 10) break;
}
