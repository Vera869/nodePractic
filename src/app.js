const express = require('express');

const app = express();

const dotenv = require('dotenv');

const userRouter = require('./routes/users');

dotenv.config();

const {
   PORT = 3003,
   API_URL = "127.0.0.1"
} = process.env;

app.get("/", (request, response) => {
   response.status(200);
   response.send("Hello Everyone !!!");
})

app.post("/", (request, response) => {
   response.status(200);
   response.send("Hello from POST!!!");
})

// app.get("/users/34", (request, response) => {
//    response.status(200);
//    response.send("user with id: 34");
// })

app.use(userRouter);

app.listen(PORT, () => {
      console.log(`Сервер запущен по адресу http://${API_URL}:${PORT}/`);
    })