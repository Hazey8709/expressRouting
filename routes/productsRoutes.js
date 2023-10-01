const express = require("express");
const router = express.Router();

const productsCtrl = require("../services/productsCtrl");

router.get("/", productsCtrl.index);
router.get("/new", productsCtrl.form);
router.get("/products/:id", productsCtrl.show);
router.get("/:id/edit", productsCtrl.form);
//
router.post("/", productsCtrl.create);
router.put("/:id", productsCtrl.update);

router.delete( "/:id", productsCtrl.destroy );
router.delete("/:id/destroy", productsCtrl.destroy);

module.exports = { router };
