const jwt = require("jsonwebtoken");

class AuthServices {
  static getToken(payload) {
    try {
      const token = jwt.sign(payload, "martin1234", {
        algorithm: "HS512",
        expiresIn: "1d",
        
      },);
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
