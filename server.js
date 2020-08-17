const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database successfully connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`App running on PORT ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("unhandledRejection Shutting Down");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
