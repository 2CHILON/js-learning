const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Hello", body: "World", userId: 1 }),
});

console.log(await res.json());
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");

  if (!response.ok) {                      // fetch does NOT throw on 404 or 500
    throw new Error(`HTTP ${response.status}`);
  }

  const posts = await response.json();     // parsing is async too
  return posts;
}

getPosts().then(posts => console.log(posts.map(p => p.title)));