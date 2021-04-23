import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import BasicFilm, { createBasicStyleSet } from "react-film";

function Movielist() {
  const originalStyleSet = createBasicStyleSet();
  const myStyleSet = {
    ...originalStyleSet,
    scrollBarHandler:
      originalStyleSet.scrollBarHandler + " my-scroll-bar-class",
  };

  return (
    <div className="movie__container">
      <div className="movie__list">
        <h2>Movies List</h2>
      </div>
      <BasicFilm styleSet={myStyleSet}>
        <MovieCard />
      </BasicFilm>
    </div>
  );
}

export default Movielist;
