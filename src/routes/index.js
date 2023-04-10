const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const productRoutes = require("./product.routes");
const productsInCarRoutes = require("./productsInCar.routes");
const Orderouter = require("./order.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger.json")

const ApiRoutes = (app) => {
  app.use("/api/v1", userRoutes);
  app.use("/api/v1", authRoutes);
  app.use("/api/v1", productRoutes);
  app.use("/api/v1", productsInCarRoutes);
  app.use("/api/v1", Orderouter);
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
};

module.exports = ApiRoutes;
