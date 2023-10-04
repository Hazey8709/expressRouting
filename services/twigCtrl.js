//*
const path = require("path");

//! Get Home Page
//* http://localhost:4000/twig
const index = (req, res) => {
    const templatePath = path.join(__dirname, "../templates/views/home.twig");

    res.render(templatePath);

    console.log("http://localhost:4000/twig");
    console.log("Index-TwigCtrl: Services/twigCtrl.js -  ");
};

module.exports = { index };
