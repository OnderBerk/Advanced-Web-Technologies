const express = require("express") ;
const hbs = require("hbs");
const {body, validationResult} = require("express-validator")
const session = require("express-session")
const MySQL = require("./db") ;


const app = express() ;
app.set("view engine", "hbs")

// static web server (distributes files under public folder)
app.use(express.static("public")) ;

// if a request contains a POST request with data, it parses into request.body
app.use(express.urlencoded({ extended: true })) ;

  // it loads session data into request.session, it creates a unique session id in cookie
app.use(session({
   secret: "sessid",
   resave: false,
   saveUninitialized: true
}));

// Routing Part (API endpoints)
app.get("/", (req, res) => {
        const db = new MySQL();
        db.connect()
          .then( val => {
              return db.query("select * from topics")
          })
          .then( result => {
                // result is a list of objects with topic's title, id etc.
                // prepare errors
                let errors, formData = {} ;
                if ( req.session.errors) {
                   errors = req.session.errors ;
                   formData = req.session.formData ;
                   req.session.formData = null;
                   req.session.errors = null ;
                   // modify active radio button
                   if ( formData.topic) {
                       result.forEach( (item, idx, arr) => {
                          if (item.id == formData.topic) {
                              arr[idx].active = true ;
                          }
                       })
                   }
                } else {
                    // Initialize form elements
                    formData.std1 = "" ;
                    formData.std2 = "" ;
                    formData.std3 = "" ;
                }

                const saved = req.session.saved ;
                req.session.saved = false ;

                res.render("form", { 
                    title: "Presentation Form",
                    layout: "base",
                    topics: result,
                    saved ,
                    errors,
                    formData
                    }) ; 
            }).then( res => {
                return db.end()
            })
            .catch(err => {
                res.send("<p>Application is not running right now, Try later</p>") ;
            }) 
})

app.post("/", [
         body("topic").exists(),
         body("std1").trim().notEmpty(),
         body("std2").trim().notEmpty(),
         body("std3").trim().notEmpty()
   ], (req, res) => {
    // Input Validation
    const result = validationResult(req) ;
    if ( !result.isEmpty()) {
        req.session.errors = result.errors ;
        req.session.formData = req.body ; // send back to form
        res.redirect("/") ;
        return ;
    }

    var db = new MySQL() ;
    db.connect()
      .then( res => {
           const students = req.body.std1 + "," + req.body.std2 + "," + req.body.std3 ;
           return db.query("update topics set status=1, students = ? where id = ? and status = 0", 
           [students, req.body.topic]) ;
       })
       .then( result => {
            req.session.saved = true ;
            res.redirect("/") ;
       }).then( res => {
           return db.end()
       }).catch( err => {
        res.send("<p>Application is not running right now, Try later</p>") ;  
       })
});


app.listen( 8080, (err) => {
    console.log("Server started@8080") ;
})
