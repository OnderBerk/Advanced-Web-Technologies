// Adding core modules
// require() function reads javascript file (fs.js), executes it, and
// returns export {} object, it saves this object in a cache
// it uses cache version for subsequent require.
const fs = require("fs") ;  // built-in modules
const os = require("os") ;

// Async write to a file
try {
  fs.writeFile("out.txt", "User Info : " + JSON.stringify(os.userInfo()), (err) => {
    if ( err) throw err ;
    console.log("Data written to file 'out.txt'") ;
    // give empty file name to trigger an error
    fs.readFile("out.txt", (err, data) => {
      if ( err) throw err ;
      console.log("From File : " + data) ;
    }) ;
  }) ;
} catch (err) {
   console.error("Fatal Error : " + err) ;
}



