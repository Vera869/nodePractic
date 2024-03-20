// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const getUsers = require('./modules/users');

// const server = http.createServer((request, response) => {
//    if(request.url === '/users') {
//       response.status = 200;
//       response.statusMessange = "ok";
//       response.header = "Content-Type: application/json";
//       response.write(getUsers());
//       response.end();

//       return;
//    }
//    response.status = 200;
//    response.statusMessange = "ok";
//    response.header = "Content-Type: text/plain";
//    response.write("Hello Everyone!!!");
//    response.end();
// });

// server.listen(port, hostname, () => {
//    console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
// }) PORT=3005 

const express = require('express');

const app = express();

const dotenv = require('dotenv');
dotenv.config();

const {
   PORT = 3003,
   API_URL = "127.0.0.1"
} = process.env;

app.get("/", (request, response) => {
   response.status(200);
   response.send("Hello Everyone 2!!!");
})

app.post("/", (request, response) => {
   response.status(200);
   response.send("Hello from POST!!!");
})

app.get("/users/34", (request, response) => {
   response.status(200);
   response.send("user with id: 34");
})

app.listen(PORT, () => {
      console.log(`Сервер запущен по адресу http://${API_URL}:${PORT}/`);
    })