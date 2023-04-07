require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

const requestpickup = require('./Routes/RequestPickUp');
const contactRequest = require('./Routes/ContactUs')
const config = require('./config');

const MONGO_URI = config.mongodb.uri;

const cors = require('cors');
const flash = require('connect-flash');

const bodyParser = require('body-parser');
const ContactRequests = require('./Models/ContactRequests');


const app = express();
const port = 5000;



app.use(express.json());
app.use(express.urlencoded({ extended: false }));



mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: false }));


const whitelist = ["http://localhost:3002"]


const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

app.use(cors(corsOptions));
app.use(flash()); // <- call the connect-flash function to create the middleware

app.use('/',requestpickup);
app.use('/',contactRequest);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
