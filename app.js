const  Raven = require('raven');
const  config =require("./package.json");
Raven.config(config.sentryurl).install();
function userSearch(username){
    console.log("usersearch is call");
    throw new Error("username is not validate ")
}
try {
    userSearch("dalong");
} catch (e) {
    Raven.captureException(e);
}

try {
    userSearch("dalongddddd");
} catch (e) {
    Raven.captureException(e);
}