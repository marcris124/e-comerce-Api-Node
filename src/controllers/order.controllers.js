const { orders,cars,productsInCarts,productsInOrdens } = require("../models")
const orderService = require("../services/order.service")

const createOrder = async (req, res, next) =>{
  try {
    const {userId,totalPrice,} = req.body
    console.log(totalPrice)
    const order = await orders.create({userId,totalPrice,})
    const userCar = await cars.findOne({where: {userId}})

    const products = await productsInCarts.findAll({
      where: {carId: userCar.id}
    })
      console.log(products);
    const productsToInsert = products.map(product =>(
      {productId: product.productId, orderId: order.id , quantity: product.quantity, price: product.price}
    ))
    await productsInOrdens.bulkCreate(productsToInsert)

    await cars.update({totalPrice: 0},{where: {userId}})
    
    await productsInCarts.destroy({ where: { carId: userCar.id } });
    
    res.status(201).json({ message:"carrito vacio" });
  } catch (error) {
    console.log(error);
    next(error)
  }
}

const getOrderId = async (req, res,next) =>{
  try {
    const { id }  = req.params
    const orderId = await orderService.getById(id)
    res.json(orderId)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createOrder,
  getOrderId
}