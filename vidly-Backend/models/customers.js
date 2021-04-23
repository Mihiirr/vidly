const mongoose = require("mongoose");

const Customer = mongoose.model("Customer", new mongoose.Schema({
    name: {
      type: String,
      require: true,
      minlength: 5,
      maxlength: 50,
    },
    isGold: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      require: true,
      minlength: 5,
      maxlength: 50,
    },
  })
);

exports.Customer = Customer;
