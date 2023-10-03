const express = require("express");
const app = express();
// const bodyParser = require("body-parser");

//! Routes Imports
const curlRoutes = require("../routes/curlRoutes");
const productRoutes = require("../routes/productsRoutes");
//
//
//

//! Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

//! CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-With, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
        res.header(
            "Access-Control-Allow-Methods",
            "GET, POST, PUT, PATCH, DELETE"
        );
    }

    next();
});

//! Service Status
//* localhost:4000/
app.get("/", (req, res) => {
    res.status(200).json({ message: "connected" });
    console.log("Connected!");
});

//! Routes
//* http://localhost:4000/curl
app.use("/curl", curlRoutes);

//* http://localhost:4000/products
app.use("/products", productRoutes.router);

//! Error Handling
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;

    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        },
    });
});

//! Export
module.exports = app;
