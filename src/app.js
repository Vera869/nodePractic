const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRouter = require('./routes/users');
const loggerOne = require('./middleweare/loggerOne');
const loggerTwo = require('./middleweare/loggerTwo');


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

app.use(userRouter);
app.use(loggerOne);
app.use(loggerTwo);

app.listen(PORT, () => {
      console.log(`Сервер запущен по адресу http://${API_URL}:${PORT}/`);
    })