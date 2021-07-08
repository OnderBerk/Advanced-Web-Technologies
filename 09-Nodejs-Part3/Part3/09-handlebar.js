// TO TEST:
// http://localhost:8080/test

const express = require("express")
const path = require("path");
const hbs = require("hbs");

const app = express() ;


// partial : reusable template components
hbs.registerPartials(path.join(__dirname, "/views/partials"));

app.set("views", path.join(__dirname,"views"));
app.set("view options", {layout: "layout/base"});
app.set("view engine", "hbs");

// CUSTOM HELPERS  
hbs.registerHelper('list', function(array, options) {
  let out = "" ; 
  let index = 1 ;
  for( let item of array) {
    // options.fn(mapping) is a built-in function to process/replace string 
    // between {{#list}} and {{/list}} using a mapping object, 
    // it replaces all {{name}} with item, and {{index}} with index
    // and it returns a string.
    out += options.fn({"name" : item, "index" : index}) ;
    index++;
  }
  // total output string
  return out;      
}) ;

hbs.registerHelper("inc", function(value) {
 return value + 1 ;
});  

hbs.registerHelper("section", function(name, options) { 
    // "this" shows the main context object.
       this[name] = options.fn(this); 
       //console.log(this);
       return null;
 }); 

 // MIDDLEWARE for static resources such as image, html, css, js
 app.use(express.static(__dirname + "/public"));

  app.get("/test", (req, res) => {
   // Get input from post, get, url params
   // Process data, (insert into db)

  
   // Output: (html, json)
   // view = "test", context = {...}
  res.render("test", { 
    title: "CTIS478 - <b>Handlebars</b> Template Engine",
    subtitle: "Html tag without <span>Escape</span> using {{{ ... }}}",
    car : { make: "Tesla", model: "Model S", year: 2016, km : 59000, price: 45000, image: "tesla_profile.jpg" } ,
    friends : [ "ali", "veli", "mehmet"],
    users : [{ name: "Ali", lastname: "Gül", id: 12345, admin: true , gender: "male" },
             { name: "Ayşe", lastname: "Şener", id: 64746, admin: false, gender: "female" },
             { name: "Özgür", lastname: "Yılmaz", id: 54332, admin: false, gender: "male"  }  
    ],
    genderIcons : { "male" : "\u{1f468}", "female" : "\u{1f469}" },
    cssFile : "test.css",
    //layout: false   // to stop default layout
    //layout: "layout/base2"   // to use a different base
  })    
});

app.listen(8080, (err) => {
  console.log("Server started at port 8080");
  console.log("use http://localhost:8080/test ") ;
}) ;