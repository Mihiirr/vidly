import React, { Component } from "react";
import axios from "axios";
import { Container, Form, Jumbotron } from "react-bootstrap";
import Vnavbar from "../Components/Vnavbar";
import './addmovies.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);

    axios
      .post("http://localhost:5000/api/auth/register", formData, {
        headers: {
          "content-type": "application.json",
        },
      })
      .then((res) => {
        this.setState({ username: res.data.results.username });
        this.setState({ email: res.data.results.email });
        this.setState({ password: res.data.results.password });
        this.props.history.push("/login");
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
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="username"
                  value={this.username}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="abc@gmail.com"
                  name="email"
                  value={this.email}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={this.password}
                  onChange={this.onChange}
                />
              </Form.Group>

              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </Form>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Register;
