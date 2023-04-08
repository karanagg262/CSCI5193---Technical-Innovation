require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

const requestpickup = require("./Routes/RequestPickUp");
const usermanagement = require("./Routes/UserManagement");

const config = require("./config");

const MONGO_URI = config.mongodb.uri;

const cors = require("cors");
const flash = require("connect-flash");

const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://ecycle:ecycle@cluster0.uwe8xva.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));

app.use(flash()); // <- call the connect-flash function to create the middleware

app.use("/", requestpickup);
app.use("/", usermanagement);

app.listen(8080, () => console.log(`Hello world app listening on port 8080!`));
