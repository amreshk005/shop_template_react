const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");

const app = express();

if (process.env.NODE_ENV == "dev") {
  app.use(morgan("dev"));
}

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS"));
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("Hello form the middleware");
  next();
});

app.use("/", productsRouter);
app.use("/api/users", usersRouter);

module.exports = app;
