import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./Pages/home";
import Favourite from "./Pages/favourite";
import Rent from "./Pages/rent";
import Moviedetail from "./Pages/moviedetail";
import Addmovie from "./Pages/addmovie";
import Login from './Pages/login';
import Register from './Pages/register';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={home}></Route>
        <Route path="/favourites" component={Favourite}></Route>
        <Route path="/rented-movies" component={Rent}></Route>
        <Route exact path="/moviedetail/:id" component={Moviedetail}></Route>
        <Route path="/addmovie" component={Addmovie}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </Router>
    </div>
  );
}

export default App;
