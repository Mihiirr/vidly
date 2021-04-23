const mongoose = require('mongoose');
const cors = require('cors');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rental');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/vidly', {useNewUrlParser: true, useCreateIndex: true})
  .then(() => console.log('Connected to MongoDB...'));

app.use(express.json({ extended: false },{ limit: '50mb'}));
app.use(cors({ origin: true, credentials: true }));
app.use('/uploads',express.static('uploads'));
app.use('/api/genres', genres);
app.use('/api/customers',customers);
app.use('/api/movies',movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));