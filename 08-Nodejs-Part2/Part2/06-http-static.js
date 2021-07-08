// Basic Web Server.

const http = require("http") ;
const fs = require("fs") ;
const path = require("path") ;
const port = 8080 ;

// This "primitive web server" distributes only html, png and css files
// All other types are unknown (folder, jpg, ...), therefore, it returns 404

// Try : 
// http://localhost:8080   --> 404: File not Found
// http://localhost:8080/index.html   --> public/index.html
// http://localhost:8080/about --> 404: File not Found
// http://localhost:8080/about/index.html --> public/about/index.html
// http://localhost:8080/about.html --> public/about.html
// http://localhost:8080/logo.png  --> public/logo.png
// http://localhost:8080/img/tesla_profile.jpg  --> 404: File not Found



const requestHandler = (request, response) => {
   let file = path.join(__dirname, "public", request.url) ;
   if ( file.endsWith("html")) {
    fs.readFile(file, (err, data) => {
        if (err) throw err ;
        response.write(data) ;
        response.end() ;
        console.log(request.method + " " + request.url);
    })
   } else if (file.endsWith("png")) {
    fs.readFile(file, (err, data) => {
        if (err) throw err ;
        response.setHeader("Content-Type", "image/png");
        response.write(data) ;
        response.end() ;
        console.log(request.method + " " + request.url);
    })
   } else if (file.endsWith("css")) {
    fs.readFile(file, (err, data) => {
        if (err) throw err ;
        response.setHeader("Content-Type", "text/css");
        response.write(data) ;
        response.end() ;
        console.log(request.method + " " + request.url);
    })
   }  else {
    //response.statusCode = 404 ;
    response.writeHead(404);
    response.write("<h1>File not Found</h1>");
    response.end();
    console.log(request.method + " " + request.url + " not supported yet"); 
   }
} ;


const server = http.createServer(requestHandler) ;

server.listen(port, () => {
    console.log(`Server listening at port ${port}`);
}).on("error", (err) => {
    console.log("Server cannot start Error : " , err.errno) ;
});

