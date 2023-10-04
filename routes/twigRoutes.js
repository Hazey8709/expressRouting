//! Imports
const express = require("express");
const router = express.Router();

//! Services
const twigCtrl = require("../services/twigCtrl");

//! Routes
//* http://localhost:4000/twig
router.get("/", twigCtrl.index);



module.exports = { router };


// //* http://localhost:4000/twig
// router.get("/", (req, res) => {
//     res.render("Home.twig");
// });
