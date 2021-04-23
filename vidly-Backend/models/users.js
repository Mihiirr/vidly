const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        maxlength: 50
    },
    
    email: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },

    password: {
        type: String,
        require: true,
        minlength: 5
    },
    
    // role : {
    //     enum: ['producer', 'customer']
    // },

    register_date: {
        type: Date,
        default: Date.now
      }
    
    // image: String,
    // token : {
    //     type: String,
    // }

})

const User = mongoose.model('User', userSchema);


exports.User = User;