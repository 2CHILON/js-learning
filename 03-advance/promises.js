//promises

function wait(ms) {
    return new Promise((resolve, reject) => {
        if (ms < 0) reject(new Error("Negative time"));
        else setTimeout(() => resolve(`wanted ${ms}ms`), ms);
    });
}

wait(500)
    .then((result) => {
        console.log(result);
        return wait(300);
    })
    .then((result) => console.log(result))
    .catch((err) => console.log("Failed:", err.message))
    .finally(() => console.log("done either way"));

await Promise.all([wait(300), wait(500)]);
await Promise.allSettled([wait(300), wait(-1)]);
await Promise.race([wait(300), wait(500)]);
await Promise.any([wait(-1), wait(500)]);