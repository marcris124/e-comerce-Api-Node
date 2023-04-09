const { Router } = require("express");
const {
  createProductinCar, getProductsInCart,
} = require("../controllers/productInCar.controller");

const router = Router();

router.post("/productsInCart", createProductinCar);

router.get("/productsInCart/:cardId/cars", getProductsInCart )

module.exports = router;
