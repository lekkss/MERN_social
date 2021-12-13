const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const morgan = require('morgan'); 
 
const app = express();


//Connect to db

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err));


//bring in routes
const postRoute = require("./routes/post");

//Midleware

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", postRoute );


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server started on port ${port}`));