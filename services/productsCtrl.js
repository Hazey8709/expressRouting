const productsModel = require("../models/products");
//
//

//

//* Get all products
const index = (req, res) => {
    const products = productsModel.all();
    res.json(products);

    console.log("Index-Log: productsModel.all - Get All");
};

//* Get product form
const form = (req, res) => {
    res.send(`Product Form`);
    console.log("Form-Log:");
};

//* Get product by id
const show = (req, res) => {
    const product = productsModel.find(req.params.id);
    res.json(product);

    console.log("Show-Log: productsModel.find - Get By Id");
};

//* Create product
const create = (req, res) => {
    const product = productsModel.create(req.body);
    res.json(product);

    console.log("Create-Log: productsModel.create - Create");
};

//* Update product by id
const update = (req, res) => {
    const product = productsModel.update(req.params.id, req.body);
    res.json(product);

    console.log("Update-Log: productsModel.update - Update");
};

//* Delete product by id
const destroy = (req, res) => {
    const product = productsModel.destroy(req.params.id);
    res.json(product);

    console.log("Delete-Log: productsModel.destroy - Delete");
};

module.exports = { index, form, show, create, update, destroy };
