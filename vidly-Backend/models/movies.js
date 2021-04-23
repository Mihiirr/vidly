const mongoose = require("mongoose");
const { Genre, genreSchema } = require("./genres");

const Movie = mongoose.model(
  "Movies",
  new mongoose.Schema({
    title: {
      type: String,
      require: true,
      trim: true,
      maxlength: 255,
    },
    genre: {
      type: mongoose.Schema.Types.ObjectId, ref: 'Genre',
    },
    aboutthemovie: {
      type: String,
      require: true,
    },
    dailyRentalRate: {
      type: Number,
      require: true,
      min: 0,
      max: 255,
    },
    buyRate: {
      type: Number,
      require: true
    },
    movieImage:{ 
      type: String
    }
  })
);

exports.Movie = Movie;
