import http from "node:http";

function sendJSON(res, status, data){
    res.writeHead(status, { "Content-Type": "application/json"});
    res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
    const  { method , url } = req;

    if (method === "GET" && url === "/health") {
        sendJSON(res, 200, { status: "ok"});
    } else if (method === "GET" && url === "/time") {
        sendJSON(res, 200, { time: new Date().toISOString() });
    } else if (method === "GET" && URL === "/hello") {
        sendJSON(res, 200, { "message" : " Hello , kenya"})
    } else {
        sendJSON(res, 404, { error :  " Not found" });
    }
})

server.listen(3000, ()=> console.log("http on 3000"));