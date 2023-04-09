const { Router } = require("express");
const {
  createProduct,
  getAllProducts,
  updateProduct,
} = require("../controllers/product.controller");
const authenticate = require("../middleware/auth.middleware");

const router = Router();

router.post("/products",  createProduct);
router.get("/products", getAllProducts);
router.put("/products/:id", updateProduct);

module.exports = router;
