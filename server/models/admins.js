const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_I = 10;
require('dotenv').config();

const adminsSchema = mongoose.Schema({
    username:{
        required: true,
        type: String,
        unique: 1,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 5
    },
    token:{
        type:String
    }
})

adminsSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){ 
        bcrypt.genSalt(SALT_I,function(err,salt){
            if(err) return next(err);

            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })

        })
    }
    else{
        next();
    }
})

adminsSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password,function(err,isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    })
}


adminsSchema.methods.generateToken = function(cb){
    var user = this;
    var token = jwt.sign(user._id.toHexString(), process.env.SECRET);
    user.token = token;
    user.save(function(err,user){
        if(err) return cb(err);
        cb(null,user);
    })
}


adminsSchema.statics.findByToken = function(token,cb){
    var user = this;

    jwt.verify(token,process.env.SECRET,function(err,decode){
        user.findOne({"_id":decode,"token":token}, function(err,user){
            if(err) return cb(err);
            cb(null,user);
        })
    })
}

const Admins = mongoose.model('Admins',adminsSchema);

module.exports = { Admins }