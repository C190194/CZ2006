import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LeakAddTwoTone, LiveTvTwoTone } from "@material-ui/icons";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [currentform, setcurrentform] = useState(0);

  function validatePassword() {
    return password.length > 0;
  }
  function validateEmail() {
    return email.length > 0;
  }
  function validateVerificationCode() {
    return verificationCode.length > 0;
  }

  // const switchForm = {
  //   0: { function: validateEmail, text: "Send verification code" },
  //   1: { function: validateVerificationCode, text: "Submit verification code" },
  //   2: { function: validatePassword, text: "Reset password" },
  // };

  function handleSubmit(event) {
    event.preventDefault();
    let reqbody;
    switch (currentform) {
      case 0:
        reqbody = {
          email: email,
        };
        break;
      case 1:
        reqbody = {
          verificationCode: verificationCode,
        };
        break;
      case 2:
        reqbody = {
          password: password,
        };
        break;
      default:
        break;
    }

    alert(JSON.stringify(reqbody));
  }

  switch (currentform) {
    case 0:
      return (
        <div>
          <h4>Forgot password</h4>
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

            <Button
              block
              size="lg"
              type="submit"
              disabled={!validateEmail()}
              onclick={handleSubmit}
            >
              <span>Send code</span>
            </Button>
          </Form>
        </div>
      );
      break;
    case 1:
      return (
        <div>
          <h4>Forgot password</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="username">
              <Form.Label>Verification Code</Form.Label>
              <br />
              <Form.Control
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter verification code"
              />
            </Form.Group>

            <Button
              block
              size="lg"
              type="submit"
              disabled={!validateVerificationCode()}
              onclick={handleSubmit}
            >
              <span>Verify code</span>
            </Button>
          </Form>
        </div>
      );
      break;
    case 2:
      return (
        <div>
          <h4>Forgot password</h4>
          <Form onSubmit={handleSubmit}>
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
              disabled={!validatePassword()}
              onclick={handleSubmit}
            >
              <span>Reset password</span>
            </Button>
          </Form>
        </div>
      );
      break;

    default:
      break;
  }
}

export default ForgotPassword;
