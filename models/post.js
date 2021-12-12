const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: "Title is Requires",
        minlength: 4,
        maxlength: 150,
    },
    title: {
        type: String,
        require: "Body is Requires",
        minlength: 4,
        maxlength: 2000 ,
    }
});

module.exports = mongoose.model("Post", postSchema);