const { productsInCarts,products,cars, users } = require("../models");

class ProductInCarService {
  static async create(newproduct) {
    try {
      const result = await productsInCarts.create(newproduct);
      return result;
    } catch (error) {
      throw error;
    }
  }




  static async getAllProductsInCart(cardId) {
    try {
      const result = await productsInCarts.findAll(
       {
        where:{
          carId:cardId
        },
        attributes:["productId","quantity"],
        include:[
          
          {
            
             model:products,
             attributes:["name","price"]

          },
          {
            model:cars,
            attributes:["id"],
            include:{
              model:users,
              attributes:["username"]
            }
          }


        ]
       }
      )
      return result
    } catch (error) {
      throw error;
    }
    

  }
}

module.exports = ProductInCarService;
