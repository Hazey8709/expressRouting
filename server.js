const http = require("http");
const app = require("./app/app");

require("dotenv").config();

http.createServer(app).listen(process.env.port, function () {
    console.log(`Browser: http://localhost:${process.env.port}/`);
    console.log(`Server is running on ${process.env.port}.`);
});
