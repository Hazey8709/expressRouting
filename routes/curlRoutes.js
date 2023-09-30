const express = require("express");
const router = express.Router();

//! Get All
//* http://www.localhost:4000/curl/
router.get("/", (req, res) => {
    res.send(`Product Page`);
    console.log("GET-ALL");
});

//* http://www.localhost:4000/curl/:id/:query
router.get("/:id/:page/:query", (req, res) => {
    const id = req.params.id;
    const page = req.params.page;
    const query = req.params.query;

    res.send({
        message: "successful - get",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            id: id,
            page: page,
            query: query,
        },
    });
    console.log("GET By: Id, Page, Query");
});

module.exports = router;
