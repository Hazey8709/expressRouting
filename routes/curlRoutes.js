const express = require("express");
const router = express.Router();

//! Get All
//* http://www.localhost:4000/curl/
router.get("/", (req, res) => {
    res.status(200).json({
        message: "successful - get",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
    console.log("GET-ALL");
});

// //* http://www.localhost:4000/curlRoutes/:id/:query
// router.get("/:id/:query", (req, res) => {
//     const id = req.params.id;
//     const query = req.query;

//     res.status(200).json({
//         message: "successful - get",
//         metadata: {
//             hostname: req.hostname,
//             method: req.method,
//             id: id,
//             query: query,
//         },
//     });
//     console.log("GET");
// });
