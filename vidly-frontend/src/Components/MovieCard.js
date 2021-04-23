import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";
import "./MovieCard.css";
import axios from "axios";

function MovieCard() {
  const [movie, setMovie] = useState([]);

  useEffect((id) => {
    axios
      .get("http://localhost:5000/api/movies")
      .then((res) => setMovie(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      {movie.map((val, key) => (
        <div className="movie__card">
          <Link to={`/moviedetail/${val._id}`}>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Img
                src={`http://localhost:5000/${val.movieImage}`}
                height="370px"
              />
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
