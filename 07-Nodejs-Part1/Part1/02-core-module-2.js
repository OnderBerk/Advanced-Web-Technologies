// Adding core modules
// require() function reads javascript file (fs.js), executes it, and
// returns export {} object, it saves this object in a cache
// it uses cache version for subsequent require.
const fs = require("fs").promises ;  // built-in promise based file operation module
const os = require("os") ;
const { config } = require("process");

/*
// Pure Promise method
fs.writeFile("out2.txt", "User Info : " + JSON.stringify(os.userInfo()))
  .then((val) => {
    console.log("File created");
    return fs.readFile("out2.txt", "utf-8") ;
  })
  .then(val => {
    console.log(val);
  })
  .catch(err => {
    console.log("Error occured");
  });
*/

// Async/await method
  (async function () {
    try {
      await fs.writeFile("out3.txt", "User Info : " + JSON.stringify(os.userInfo()))
      let content = await fs.readFile("out4.txt", "utf-8") ;
      console.log(content);
    } catch(err) {
      console.log(`Catch Error : ${err}`);
    }
  })() ;





