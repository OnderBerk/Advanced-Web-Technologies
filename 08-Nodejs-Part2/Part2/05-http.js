// Basic Web Server.

const http = require("http") ;
const port = 8080 ;
let counter = 0 ;
const requestHandler = (request, response) => {
   //response.setHeader("Content-Type", "text/text");
  response.write(`<h1>Request to the page : ${request.url}</h1>`);
  response.write(`<p>Counter : ${++counter}</p>`) ;
  response.end(); // otherwise, client still waits for response to end.
  console.log(request.method + " " + request.url );
} ;


const server = http.createServer(requestHandler) ;

server.listen(port, () => {
    console.log(`Server listening at port ${port}`);
}).on("error", (err) => {
    console.log("Server cannot start Error : " , err.errno) ;
});

