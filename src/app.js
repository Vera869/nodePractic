const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
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
   response.write("Hello Everyone!!!");
   response.end();
});

server.listen(port, hostname, () => {
   console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
})