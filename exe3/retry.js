async function retry(asyncFn, times) {
    let lastError;

    for (let attempt = 1; attempt <= times; attempt++) {
        try {
            return await asyncFn();
        } catch (err) {
            lastError = err;
            console.log(`Attempt ${attempt} failed: ${err.message}`);

        }
    }

    throw lastError;
}

// A function that fails about 70% of the time

async function flaky() {
    if (Math.random() < 0.7) throw new Error("random failure");
    return "success!";
}

try {
    const result = await retry(flaky, 5);
    console.log("Result:", result); 
} catch (err) {
    console.log("Gave up:", err.message);
}