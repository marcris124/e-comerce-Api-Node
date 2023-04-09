const { productsInCarts, cars, products } = require("../models");
const ProductInCarService = require("../services/productInCar.service");

const createProductinCar = async (req, res, next) => {
  try {
    const { carId, productId, quantity, price } = req.body;
    await productsInCarts.create({
      carId,
      productId,
      quantity,
      price,
    });
    const totalPrice = price * quantity;
    await cars.increment({ totalPrice }, { where: { id: carId } });
  
    res.json({
      message: "Producto Agregado Correctamente!!",
    });
  } catch (error) {
    next(error);
  }
};

const getProductsInCart= async (req, res, next) => { 

  try {
    const { cardId } = req.params
    const productsInCart = await ProductInCarService.getAllProductsInCart( cardId )
    res.json(productsInCart)
  } catch (error) {
    next(error)
  }

 }

 
module.exports = {
  createProductinCar,
  getProductsInCart
};
