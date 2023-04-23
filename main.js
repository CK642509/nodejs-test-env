const dotenv = require('dotenv');

dotenv.config({path:"./.env"});

console.log(process.env.TEST)
if (process.env.TEST === "testing") console.log("It is testing")
else if (process.env.TEST === undefined) console.log("It should be undefined")
else console.log("I don't know")