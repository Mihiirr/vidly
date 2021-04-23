const { Movie } = require("../models/movies");
const { Genre } = require("../models/genres");
const mongoose = require("mongoose");
const multer = require("multer");
const express = require("express");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.get("/", async (req, res) => {
  const movies = await Movie.find().sort("name");
  res.send(movies);
});

router.post("/", upload.single("movieImage"), async (req, res) => {
  const genre = await Genre.findOne(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid genre.");

  const movie = new Movie({
    title: req.body.title,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
    movieImage: req.file.path,
    aboutthemovie: req.body.aboutthemovie,
    dailyRentalRate: req.body.dailyRentalRate,
    buyRate: req.body.buyRate,
  });
  movie = await movie.save().then((doc) => {
    res.status(201).json({
      message: "Movie Added Successfully",
      results: doc,
    });
  });
});

router.put("/:id", async (req, res) => {
  const genre = await Genre.findOne(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid genre.");

  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      genre: {
        _id: genre._id,
        name: genre.name,
      },
      movieImage: req.file.path,
      aboutthemovie: req.body.aboutthemovie,
      dailyRentalRate: req.body.dailyRentalRate,
      buyRate: req.body.buyRate,
    },
    { new: true }
  );

  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});

router.delete("/:id", async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id);

  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});

router.get("/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});

module.exports = router;
