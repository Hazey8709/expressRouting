const express = require("express");
const router = express.Router();

//! Get All
//* http://www.localhost:4000/curl/
router.get("/", (req, res) => {
    res.send({
        page: 2,
        Sort: "Price",
        Order: "desc",
    });
    console.log("GET-ALL: curl Route");
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
    console.log("GET By: Id, Page, Query: curl Route");
});

module.exports = router;
