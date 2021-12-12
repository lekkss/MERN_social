const express = require('express');
const morgan = require('morgan'); 

const app = express();

//bring in routes
const postRoute = require("./routes/post");

//Midleware

app.use(morgan("dev"));
app.use("/", postRoute );


const port = 8080;
app.listen(port, () => console.log(`server started on port ${port}`));