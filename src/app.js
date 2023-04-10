const express = require("express");
const ApiRoutes = require("./routes");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json")
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

ApiRoutes(app);
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use((error, req, res, next) => res.status(400).json(error));

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el Puerto ${PORT}`);
});


//postgres://martin:9N4ISY8nBW3SjXe8Bqv7xNRjkFeU7vdL@
//dpg-cgpkv40u9tun42tlm130-a.oregon-postgres.render.com
///ecomerce_db
