import http from "node:http";
import { readFile } from "node:fs/promises";
import { read } from "node:fs";

const server = http.createServer(async (req, res) => {
    try {
        const data = await readFile("posts.json", "utf8");
        res.writeHead(200, { "Content-Type": "application/json"});
        res.end(data);
    } catch {
        res.writeHead(500, { "Content-Type": "application/json"});
        res.end(JSON.stringify({ error: "could not read posts.json" }));
    }

});

server.listen(3000, () => console.log("Server running at http://localhost:3000"));