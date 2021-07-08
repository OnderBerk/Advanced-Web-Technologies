// Third party modules installed by npm
// npm init   // to create package.json file
// npm install packagename  // install package locally, all source code are in node_modules folder (default)
// npm install packagename -g  // install globally, src are in global folder not in project folder.
// npm config list // gives the path of installation including path of global modules.  
// npm update  // updates new packages version = major.minor.patch, ^:minor,  ~:only patch
// 1.0 = 1.0.x = ~1.0.4  1 = 1.x = ^1.0.4
// npm i packagename@1.9.1   or packagename@^1.9.1
// npm outdated packagename  // shows the newest version 
// npm install packagename --save-dev // install as development package, not used in production such as testing tools (mocka)
// npm uninstall packagename // to delete package
// npm install  // re-install all packages in package.json
// npx local-cli-commands
// npm i cowsay --save-dev
// npx cowsay "hello world"
// npm i nodemon -g
// nodemon app.js

// to reinstall all packages, you need package.json file, it contains all dependencies.
// npm i   reinstall all packages based on the version rules in package.json
// if there is a file namely, package-lock.json, npm i will retrieve the exact version of the current project, 
// it does not install the newest version. In this way, all developers will have the same version.
 

const chalk = require("chalk");
const validator = require("validator");
const axios = require("axios");


console.log(chalk.bgGreen.bold.italic("New Third Party Module"));
console.log(chalk.bgGreen(validator.isEmail("sgenc@bilkent.edu.tr")));

// async Task which sends an HTTP request to the given URL address, when it gets the result, its callback will be called.
axios.get("https://reqres.in/api/users/2")
     .then((res) => {
         console.log(res.data);
     })
     .catch((err) => {
         if ( err ) {
             console.log("Error occured.");
         }
     });
console.log("End of the Program");