const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next) {//user is refferenced as this so we can not use lambda
    const user = this;
    if(!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if(err) {
            return next(err);
        }

        //encrypt the password
        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) {
                return next(err);
            }

            //set the new password
            user.password = hash;

            //go to save
            next();
        });
    });
}); 

userSchema.methods.comparePassword = function(candidatePassword) {//user is refferenced as this so we can not use lambda
    const user = this;

    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if(err) {
                return reject(err);
            }

            if(!isMatch) {
                return reject(false);
            }

            return resolve(true);
        });
    });
}

mongoose.model('User', userSchema);