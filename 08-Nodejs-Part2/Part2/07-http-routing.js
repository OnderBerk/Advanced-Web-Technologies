const http = require("http") ;
const port = 8000;

// This file shows to map a logical url to a piece of code instead of a physical file.

// Try:
// http://localhost:8000/
// http://localhost:8000/about
// http://localhost:8000/test


/**
 * 
 * @param {http.IncomingMessage} req 
 * @param {http.ServerResponse} res 
 */
const requestHandler = (req, res) => {
   var path = req.url.replace(/\/?(?:\?.*)?/, '').toLowerCase(); // delete forward slash and query string
   console.log(path);
   // match given logical url address to a piece of code (an output), called routing
   switch(path) {
     case "":
            res.write(`<p>Request URL : ${req.url}</p>`);
            res.write(`<p>Path : ${path}</p>`);
            
            res.write("<h3>Content:</h3>");
            res.end("<p>Homepage</p>");
            break;
      case "about" :
            res.write(`<p>Request URL : ${req.url}</p>`);
            res.write(`<p>Path : ${path}</p>`);
            res.write("<h3>Content:</h3>");
            res.end("<p>About Page</p>");
            break;
      default: 
            res.writeHead(404);
            res.end("<p>404 - File not found - Nodejs</p>");
   }
};

http.createServer(requestHandler)
    .listen(port, () => {
       console.log("Server started at port " + port);
    }).on("error", (err) => {
      console.log("Server cannot start Error : " , err.errno) ;
  }); ;