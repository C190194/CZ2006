import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AddAlertRounded } from "@material-ui/icons";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    // alert(email + " " + password);
    event.preventDefault();
    axios
      .post("/user/login", {
        // email: "astha@gmail.com",
        // password: "astha123",
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        sessionStorage.setItem(
          "userData",
          JSON.stringify(response.data.result)
        );
        setToken(response.data.token);
        history.push("/planner");
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  }

  function forgotPwd() {
    history.push("/forgotpwd");
  }

  function register() {
    history.push("/register");
  }

  return (
    <div className="Login container" align="center">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <br />
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </Form.Group>
        <Button type="submit" disabled={!validateForm()}>
          <span>Login</span>
        </Button>
        <br />
        <span class="psw">
          <a href="#" onClick={forgotPwd}>
            Forgot password?
          </a>
        </span>
        <span class="psw">
          Or{" "}
          <a href="#" onClick={register}>
            Create account
          </a>
        </span>
      </Form>
    </div>
  );
}
