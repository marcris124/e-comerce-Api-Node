
const { orders } = require("../models")

class orderService {
  static async getById(id){
    try {
      const order = orders.findByPk(id)
      return order
    } catch (error) {
      throw error
    }
  }
}

module.exports = orderService