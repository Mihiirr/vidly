import React from "react";
import Vnavbar from "../Components/Vnavbar";
import Movielist from "../Components/Movielist.js";
import Carousel from '../Components/Carousel';

function home() {
  return (
    <div>
      <Vnavbar />
      <Carousel />
      <Movielist />
    </div>
  );
}

export default home;
