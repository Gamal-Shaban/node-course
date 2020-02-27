const http = require("http")
const routing = require('./routing')

const server = http.createServer(routing);

server.listen(3000, () => {
  console.log("server running .....");
});


// fs.readFile("./index.html", null, (error, data) => {
//     if (error) {
//       res.end("file has error");
//     } else {
//       res.end(data);
//     }
//   });