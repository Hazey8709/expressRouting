const http = require("http");
const app = require("./app/app");

require("dotenv").config();

//* use another if no port is specified or available
const desiredPort = parseInt(process.env.PORT, 10) || 4000;

//* Create server with app
const server = http.createServer(app);

//* Start server
function startServer() {
    server.listen(desiredPort, () => {
        console.log(`Server is running on ${desiredPort}.`);
    });
}

//* Find available port
function findAvailablePort(port) {
    server.once("error", (err) => {
        if (err.code === "EADDRINUSE") {
            console.log(`Port ${port} is already in use.`);
            findAvailablePort(port + 1);
        }
    });

    server.on("listening", () => {
        console.log(`Server is running on port ${port}`);
    });

    server.listen(port);
}

//* Start server
findAvailablePort(desiredPort);
