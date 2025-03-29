const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello from home page!");
})

app.get('/about', (req, res) => {
    return res.send("Hello from about page!");
})

// const myServer = http.createServer((req, res) => {
//     res.end("Hello from server 1");
// })

// function serverHandler() {
//     if (req.url === "/favicon.ico") return res.end();

//     const log = `${Date.now()}: ${req.method} ${req.url} New req recieved\n`;

//     const myUrl = url.parse(req.url, true);

//     console.log(myUrl);

//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (myUrl.pathname) {
//             case '/':
//                 if (req.method === "GET")
//                     res.end("Homepage");
//                 break;
//             case '/about':
//                 const username = myUrl.query.myName;
//                 res.end(`Hi ${username}!`);
//                 break;
//             case '/search':
//                 const search = myUrl.query.search_query;
//                 res.end(`Here are your search result for ` + search);
//                 break;
//             case '/signup':
//                 if (req.method === "GET") req.end("This is signup form!");
//                 else if (req.method === "POST") {
//                     // DB query
//                     res.end("Success!");
//                 }
//                 break;
//             default:
//                 res.end("404 not found!");
//         }
//     })
// }

// const myServer = http.createServer(serverHandler);
// const myServer = http.createServer(app);


// myServer.listen(8000, () => console.log("Server Started!"));


app.listen(8000, () => console.log("Server Started!"))