const express = require("express");
const _ = require("lodash");

const port = 8000 ;
const app = express();

// first middleware to distribute static resources like a web server.
// it searches the url in the given folder, and if it finds the resource/file, it sends resource back to client
// it searches "index.html" if it is a folder instead of a file.
// it tries to map logical url address to physical resource/file
// http://localhost:8000  ->  __dirname/public/index.html
// http://localhost:8000/about  ->  __dirname/public/about/index.html (Not found)
// http://localhost:8000/about/test.html  ->  __dirname/public/about/test.html  (Not found)
// http://localhost:8000/img/user.png  ->  __dirname/public/img/user.png
// http://localhost:8000/css/app.css  ->  __dirname/public/css/app.css
// if it cannot find the file in the pyhsical address, it forwards http request to next middleware.
// if it finds the file, it prepares http response and sends it back to client.

app.use(express.static(__dirname + "/public")); // static web server (distributes static files)

// The order of routes is important, no need this code, since the middleware above serves "index.html" already
/*app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
}); */

// if request body format is x-www-form-urlencoded format,
// it parses an object and put under request.body
app.use(express.urlencoded({extended:true})); 
// if request body content type is in application/json, it parses json text, and 
// convert and put under request.body
const jsonMiddleware = express.json() ;

 //app.use(bodyParser.json()) ;  // global middleware 

// this shows how to process query string (req.query)
// Try:
// http://localhost:8000/about?name=ali&id=1234
app.get("/about", (req, res) => {
    // Controller
    let out = "" ;
    out += "<p>About page</p>";
    if ( !_.isEmpty(req.query) ) {
      for ( let prop in req.query) {
          out +="<p>qs : " + prop + " : " + req.query[prop] + "</p>";
      }
    }
    res.send(out);

});

// url parameters
app.get("/student/:id" , (req, res) => {
  var list = [ 
    {name: "Ali Gül", dept: "CTIS"},
    {name: "Nazlı Can", dept: "IE"},
    {name: "Ayşe Kul", dept: "GRA"}   
  ] ;
  var id = parseInt(req.params["id"]) ;
  if ( id >=0 && id < list.length) {
    return res.json(list[id]) ;
  }
  return res.json({ error: "invalid student id"}) ;
});

// to test post request, use "postman" tool or add a chrome plugin such as ARC (Advanced Rest)
app.post("/person", jsonMiddleware, (req, res) => {
   console.log(req.body);
   res.send("<p>Post request sent</p>");
});

// middleware ( at the end, it acts like catch-all handler)
app.use((req, res, next) => {
   res.type("text/text");  // Content Type
   res.status(404);        // Status Code
   res.send("404 File not found - Nodejs App"); // Send body
});

app.listen(port, (err) => {
  console.log("Server started at port " + port);
});
