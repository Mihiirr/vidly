import React, { Component } from "react";
import axios from "axios";
import { Container, Form, Jumbotron } from "react-bootstrap";
import Vnavbar from "../Components/Vnavbar";
import './addmovies.css'

class Addmovie extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      aboutthemovie: "",
      dailyRentalRate: "",
      buyRate: "",
      movieImage: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChange2 = (e) => {
    this.setState({ movieImage: e.target.files[0] });
  };

  saveHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("movieImage", this.state.movieImage);
    formData.append("title", this.state.title);
    formData.append("aboutthemovie", this.state.aboutthemovie);
    formData.append("dailyRentalRate", this.state.dailyRentalRate);
    formData.append("buyRate", this.state.buyRate);

    axios
      .post("http://localhost:5000/api/movies", formData, {
        headers: {
          "content-type": "application.json",
        },
      })
      .then((res) => {
        this.setState({ title: res.data.results.title });
        this.setState({ aboutthemovie: res.data.results.aboutthemovie });
        this.setState({ dailyRentalRate: res.data.results.dailyRentalRate });
        this.setState({ buyRate: res.data.results.buyRate });
        this.setState({ movieImage: res.data.results.movieImage });
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="addmovie">
        <Vnavbar />
        <Container>
          <Jumbotron>
            <Form noValidate onSubmit={this.saveHandler}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Movie Name"
                  name="title"
                  value={this.title}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>aboutthemovie</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="aboutthemovie"
                  value={this.aboutthemovie}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>dailyRentalRate</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Rental Rate "
                  name="dailyRentalRate"
                  value={this.dailyRentalRate}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>buyRate</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Purchase Rate"
                  name="buyRate"
                  value={this.buyRate}
                  onChange={this.onChange}
                />
              </Form.Group>

              <div class="form-group">
                <input
                  type="file"
                  placeholder="file"
                  name="movieImage"
                  className="form-control"
                  value={this.movieImage}
                  onChange={this.onChange2}
                />
              </div>

              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </Form>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Addmovie;
