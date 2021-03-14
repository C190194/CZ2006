import React, { useState } from "react";
import { Button, Form } from "reactstrap";
import './Register.css'

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");

    function validateForm() {
    return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
    alert(email+" "+password+" "+cpassword);
    event.preventDefault();
    }

    return (
        <div className="Register" >
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <br/>
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
            <br/>
            <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
            />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
            <Form.Label>Confirm Password</Form.Label>
            <br/>
            <Form.Control
                type="password"
                value={cpassword}
                onChange={(e) => setcPassword(e.target.value)}
                placeholder="Confirm password"
            />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()} onclick={handleSubmit}>
            <span>Register</span>
            </Button>
        </Form>
        </div>
    )
}

export default Register
