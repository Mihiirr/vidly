const mongoose = require('mongoose');
const Joi = require('joi');

const Rental = mongoose.model('Rental', new mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                require: true,
                minlength: 5,
                maxlength: 50
            },
            
            isGold: {
                type: Boolean,
                default: false
            },

            phone: {
                type: String,
                require: true,
                minlength: 5,
                maxlength: 50
            }
        }),
        require: true
    },

    movie: {
        type: new mongoose.Schema({
            title: {
                type: String,
                require: true,
                trim: true,
                minlength: 5,
                maxlength: 255
            },
            dailyRentalRate: {
                type: Number,
                require: true,
                min: 0,
                max: 255
            }
        }),
        require: true
    },

    dateOut: {
        type: Date,
        require: true,
        default: Date.now()
    },
    
    dateReturned: {
        type: Date
    },

    rentalFee: {
        type: Number,
        min: 0
    }
}));

function validateRental(rental) {
    const schema = {
        customerId: Joi.string().required(),
        movieId: Joi.string().required()
    };
    return Joi.validate(rental, schema)
}

exports.Rental = Rental;
exports.validate = validateRental;