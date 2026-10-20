try {
    JSON.parse("not json");
} catch (err) {
    console.log("Failed:", err.message)
}