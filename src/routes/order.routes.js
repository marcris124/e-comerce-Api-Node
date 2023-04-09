const {Router} = require("express")
const { createOrder, getOrderId } = require("../controllers/order.controllers")

const router = Router()

router.post("/order",createOrder)
router.get("/order/:id", getOrderId  )

module.exports = router