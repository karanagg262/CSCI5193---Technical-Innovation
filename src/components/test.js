<Card style={{ background: "#87a743" }} className="login-mobile-style">
  <Card.Body>
    <h2 className="text-center mb-4">Login</h2>
    <p
      style={{
        fontStyle: "italic",
        fontSize: "13px",
        lineHeight: "12px",
        color: "#4B4B4B",
      }}
    >
      Please Note: For Pick-Up service you would be required to showcase your NS
      ID for verification purposes.
    </p>
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
        <div className="error" style={{ color: "red", fontSize: "14px" }}>
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
          <div className="error" style={{ color: "red", fontSize: "14px" }}>
            {" "}
            {error.password}{" "}
          </div>
        )}
      </div>

      <Button
        style={{
          marginTop: "30px",
          background: "#E8871E",
          border: "none",
        }}
        type="submit"
      >
        Log In
      </Button>
    </Form>
    <div className="w-100 text-right mt -2" style={{ marginTop: "20px" }}>
      Not Registered?{" "}
      <Link to="/signup" style={{ textDecoration: "none" }}>
        Signup
      </Link>
    </div>
  </Card.Body>
</Card>;
