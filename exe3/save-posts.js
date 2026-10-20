import { writeFile } from  "node:fs/promises"
const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");

if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
}

const posts = await response.json();
await writeFile("posts.json", JSON.stringify(posts, null, 2));
console.log(`Saved ${posts.length} posts to posts.json`);