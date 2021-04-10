import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [cos, setCos] = useState(""); //course of study
  const [yos, setYos] = useState(""); //year of study

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    alert(email + " " + password + " " + cpassword);
    event.preventDefault();
  }

  return (
    <div>
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
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <br />
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group size="lg" controlId="cos">
          <Form.Label>Course of study</Form.Label>
          <br />
          <Form.Control
            type="text"
            value={cos}
            onChange={(e) => setCos(e.target.value)}
            placeholder="Enter Course of study"
          />
        </Form.Group>
        <Form.Group size="lg" controlId="yos">
          <Form.Label>Year of study (number)</Form.Label>
          <br />
          <Form.Control
            type="number"
            value={yos}
            onChange={(e) => setYos(e.target.value)}
            placeholder="Enter Year of study"
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
        <Form.Group size="lg" controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <br />
          <Form.Control
            type="password"
            value={cpassword}
            onChange={(e) => setcPassword(e.target.value)}
            placeholder="Confirm password"
          />
        </Form.Group>
        <Button
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
          onclick={handleSubmit}
        >
          <span>Register</span>
        </Button>
      </Form>
    </div>
  );
}
