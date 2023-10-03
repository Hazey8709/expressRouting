const productsModel = require("../models/products");
//
//

//

//* Get all products
const index = (req, res) => {
    const products = productsModel.all();
    res.json(products);

    console.log("Index-Log: Services/productsCtrl.js - Get All");
};

//* Get product form
const form = (req, res) => {
    res.send(`Product Form`);
    console.log("Form-Log: Services/productsCtrl.js - Form");
};

//* Get product by id
const show = (req, res) => {
    const productId = req.params.id;
    console.log(
        "Show-Log: Services/productsCtrl.js - Get By Id",
        "-ProductId-:",
        productId
    );

    const product = productsModel.find(productId);
    console.log(
        "Show-Log: Services/productsCtrl.js - Get By Id",
        "-Product Found-:",
        product
    );

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
};

//* Create product
const create = (req, res) => {
    const product = productsModel.create(req.body);
    res.json(product);

    console.log("Create-Log: Services/productsCtrl.js - Create");
};

//* Update product by id
const update = (req, res) => {
    const product = productsModel.update(req.params.id, req.body);
    res.json(product);

    console.log("Update-Log: Services/productsCtrl.js - Update");
};

//* Delete product by id
const destroy = (req, res) => {
    const product = productsModel.destroy(req.params.id);
    res.json(product);

    console.log("Delete-Log: Services/productsCtrl.js - Delete");
};

module.exports = { index, form, show, create, update, destroy };
