const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require('uuid');
uuidv4();


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    hash_password: {
        type: String,
        required: true
    },
    salt: String,
    created: {
        type:Date,
        default:Date.now
    },
    update: Date
})


//Virtual field
userSchema.virtual('password')
.set(function(password) {
    //create temporary paswword
    this._password =  password;

    //generate time stamp
    this.salt = uuidv4();

    //encrypt the passsword
    this.hash_password = this.encryptPassword(password);
})
.get(function(){
    return this._password;
})

//Methods
userSchema.methods = {
    encryptPassword: function(password) {
        if(!password){
            return "";
        }
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        } catch (err) {
            return ""
        }
    }
};

module.exports = mongoose.model("User", userSchema);