async function getTodo(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch todo ${id}: HTTP ${response.status}`);
    }
    return response.json();
}

for (const id of [1, 99999]) {
    try {
        const todo = await getTodo(id);
        console.log("OK:", todo);
    } catch (err) {
        console.log("Error:", err.message);
    }
}