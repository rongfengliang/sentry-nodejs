const  Raven = require('raven');
const  config =require("./package.json");
const  mylogin = require("./my.js");
Raven.config(config.sentryurl).install();
function userSearch(username){
    console.log("usersearch is call");
    throw new Error("username is not validate ")
}
var sessionid ="";
try {
    console.log(mylogin.sessionid)
    sessionid =mylogin.login();  
    console.log(sessionid);
 } catch (e) {
     console.log("is wrong");
    Raven.captureException(e);
}
