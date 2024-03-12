const http = require('http');

const getUsers = require('./modules/users');

const server = http.createServer((request, response) => {
   if(request.url === '/users') {
      response.status = 200;
      response.statusMessange = "ok";
      response.header = "Content-Type: application/json";
      response.write(getUsers());
      response.end();

      return;
   }
   response.status = 200;
   response.statusMessange = "ok";
   response.header = "Content-Type: text/plain";
   response.write("Hello all!!!");
   response.end();
});

server.listen(3000, () => {
   console.log("Сервер запущен по адресу http://127.0.0.1:3000");
})