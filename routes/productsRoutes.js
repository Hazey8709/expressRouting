const express = require("express");
const router = express.Router();

const productsCtrl = require("../services/productsCtrl");

router.get("/", productsCtrl.index);

//* Show product by id   (should come before /new)
router.get("/:id", productsCtrl.show);

//* Get product form
router.get("/new", productsCtrl.form);

//* Get product form and edit
router.get("/:id/edit", productsCtrl.form);

//* Create product
router.post("/", productsCtrl.create);

//* Update product by id
router.put("/:id", productsCtrl.update);

//* Delete product by id
router.delete("/:id", productsCtrl.destroy);

//* Delete product by id/destroy
router.delete("/:id/destroy", productsCtrl.destroy);

module.exports = { router };
