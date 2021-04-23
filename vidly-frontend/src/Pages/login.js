import React, { Component } from "react";
import axios from "axios";
import { Button, Container, Form, Jumbotron } from "react-bootstrap";
import Vnavbar from "../Components/Vnavbar";
import './addmovies.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);

    axios
      .post("http://localhost:5000/api/auth/login", formData, {
        headers: {
          "content-type": "application.json",
        },
      })
      .then((res) => {
        this.setState({ email: res.data.results.email });
        this.setState({ password: res.data.results.password });
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
                  name="buyRate"
                  value={this.buyRate}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Button type="submit" variant="primary">Login</Button>
              <p>Don't have and account <a href="/register">Register account</a></p>
            </Form>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Login;
