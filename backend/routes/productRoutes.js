const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductByID,
} = require("../controller/productController");

//get all products from db
router.get("/", getAllProducts);

// get product by id from db
router.get("/:id", getProductByID);

module.exports = router;
