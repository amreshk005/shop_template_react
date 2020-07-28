const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");

const app = express();

if (process.env.NODE_ENV == "dev") {
  app.use(morgan("dev"));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("Hello form the middleware");
  next();
});

app.use("/", productsRouter);
app.use("/api/users", usersRouter);

module.exports = app;
