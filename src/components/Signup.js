import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Signup.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  let errorFlag = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(firstName);
    console.log(lastName);

    console.log(password);
    console.log(confirmPassword);
    const formValue = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    setError(validateForm(formValue));
    if (errorFlag === 0) {
      alert("User Registered");
      navigate("/", {
        state: { emailFromSignup: email, passwordFromSignup: password },
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  const validateForm = (data) => {
    const letterRegex = /^[a-zA-Z\s]*$/; //Reference: https://stackoverflow.com/questions/12778083/regex-with-space-and-letters-only
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; //Reference : https://regexr.com/3e48o
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //Reference: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    const errorMessage = {};
    if (letterRegex.test(data.firstName) === false) {
      errorFlag = 1;
      errorMessage.firstName = "First Name should only have letters";
    } else if (letterRegex.test(data.lastName) === false) {
      errorFlag = 1;
      errorMessage.lastName = "Last Name should only have letters ";
    } else if (data.email === "" || emailRegex.test(data.email) === false) {
      errorFlag = 1;
      errorMessage.email = "Email is not valid";
    } else if (passwordRegex.test(data.password) == false) {
      errorFlag = 1;
      errorMessage.password =
        "Password must be more than 8 characters, must have at least one uppercase letter, one lowercase letter, one number and one special character";
    } else if (data.password !== data.confirmPassword) {
      errorFlag = 1;
      errorMessage.confirmPassword = "Password do not match";
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
        <Card className="mobile-style">
          <Card.Body>
            <h2 className="text-center mb-4">Signup</h2>
            <Form onSubmit={handleSubmit}>
              <div style={{ textAlign: "left" }}>
                <Form.Group id="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onSubmit={handleSubmit}
                    required
                  />
                </Form.Group>
                <div
                  className="error"
                  style={{ color: "red", fontSize: "14px" }}
                >
                  {" "}
                  {error.firstName}{" "}
                </div>
              </div>
              <div style={{ textAlign: "left" }}>
                <Form.Group id="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onSubmit={handleSubmit}
                    required
                  />
                </Form.Group>
                <div
                  className="error"
                  style={{ color: "red", fontSize: "14px" }}
                >
                  {" "}
                  {error.lastName}{" "}
                </div>
              </div>
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

              <div style={{ textAlign: "left" }}>
                <Form.Group id="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    name="confirmPassword"
                    type={"password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                    {error.confirmPassword}{" "}
                  </div>
                )}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  style={{
                    marginTop: "30px",
                  }}
                  type="submit"
                >
                  Register
                </Button>
              </div>
            </Form>
            <div
              className="w-100 text-right mt -2"
              style={{ marginTop: "20px" }}
            >
              Already Registered?{" "}
              <Link to="/" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
