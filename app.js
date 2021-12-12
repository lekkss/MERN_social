const express = require('express');

const app = express();


app.get("/", (req, res) => {
    res.send("Hello World From Here"); 
});


const port = 8080;
app.listen(port, () => console.log(`server started on port ${port}`));