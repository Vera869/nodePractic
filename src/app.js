const http = require('http');
const fs = require('fs');
// const path = require('path');

const getUsers = () => {
//    const filePath = path.join(__dirname, './data/users.json')
   //const filePath = path.join('./src/data/users.json')
   return fs.readFileSync('./src/data/users.json');
}

const server = http.createServer((request, response) => {
   if(request.url === '/user') {
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
   response.write("Hello World!!!");
   response.end();
});

server.listen(3000, () => {
   console.log("Сервер запущен по адресу http://127.0.0.1:3000");
})