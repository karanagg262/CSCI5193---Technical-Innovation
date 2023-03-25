import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const { state } = useLocation();
  const { emailFromSignup, passwordFromSignup } = state || {};

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  let errorFlag = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    const formValue = {
      email,
      password,
    };
    setError(validateForm(formValue));
    if (
      errorFlag === 0 &&
      (email === emailFromSignup || email === "test@gmail.com") &&
      (password === passwordFromSignup || password === "H@alifax2023")
    ) {
      // navigate("/feed");
      alert("User authenticated");
      setEmail("");
      setPassword("");
    } else {
      alert("Incorrect email/password");
    }
  };

  const validateForm = (data) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; //Reference : https://regexr.com/3e48o
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //Reference: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    const errorMessage = {};
    if (data.email === "" || emailRegex.test(data.email) == false) {
      errorFlag = 1;
      errorMessage.email = "Email is not valid";
    } else if (passwordRegex.test(data.password) == false) {
      errorFlag = 1;
      errorMessage.password =
        "Password must be more than 8 characters, must have at least one uppercase letter, one lowercase letter, one number and one special character";
    } else {
      errorFlag = 0;
    }
    return errorMessage;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Card className="login-mobile-style">
          <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <div style={{ textAlign: "left" }}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onSubmit={handleSubmit}
                    required
                  />
                </Form.Group>
                <div
                  className="error"
                  style={{ color: "red", fontSize: "14px" }}
                >
                  {" "}
                  {error.email}{" "}
                </div>
              </div>
              <div style={{ textAlign: "left" }}>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onSubmit={handleSubmit}
                    required
                  />
                </Form.Group>
                {error && (
                  <div
                    className="error"
                    style={{ color: "red", fontSize: "14px" }}
                  >
                    {" "}
                    {error.password}{" "}
                  </div>
                )}
              </div>

              <Button style={{ marginTop: "30px" }} type="submit">
                Log In
              </Button>
            </Form>
            <div
              className="w-100 text-right mt -2"
              style={{ marginTop: "20px" }}
            >
              Not Registered?{" "}
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Signup
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
