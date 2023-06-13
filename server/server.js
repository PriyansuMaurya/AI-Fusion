const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
var cors = require("cors");
const port = process.env.PORT;
const morgan = require("morgan");
const http = require("http");
const server = http.createServer(app);

const connectDB = require("./db");

connectDB();
const serverRoutes = require("./serverRoutes");
app.use([
  cors(),
  morgan("dev"),
  bodyparser.json(),
  bodyparser.urlencoded({ extended: false }),
]);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use("/api/email", serverRoutes);
