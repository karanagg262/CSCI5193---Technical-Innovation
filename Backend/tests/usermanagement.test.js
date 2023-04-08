//References: https://www.freecodecamp.org/news/how-to-test-in-express-and-mongoose-apps/
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const bcrypt = require("bcrypt");

require("dotenv").config();

beforeEach(async () => {
  await mongoose.connect(
    "mongodb+srv://ecycle:ecycle@cluster0.uwe8xva.mongodb.net/?retryWrites=true&w=majority"
  );
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("POST /addUser", () => {
  it("should create a new user", async () => {
    const userData = {
      firstName: "Saifali",
      lastName: "Prasla",
      email: "saifaliprasla432@gmail.com",
      password: "Test@12345",
      address: "test address",
    };

    const response = await request(app).post("/addUser").send(userData);

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("success");
  });

  it("should return 409 if email already exists", async () => {
    const existingUser = {
      firstName: "Saifali",
      lastName: "Prasla",
      email: "saifaliprasla43@gmail.com",
      password: "Test@12345",
      address: "test address",
    };
    const response = await request(app).post("/addUser").send(existingUser);
    expect(response.status).toBe(409);
    expect(response.body.message).toBe("Email already exists");
  });
});

describe("POST /authenticateUser", () => {
  it("should return status 200 and message 'User Authenticated' if email and password match", async () => {
    let userData = {
      email: "saifaliprasla432@gmail.com",
      password: "Test@12345",
    };

    const response = await request(app)
      .post("/authenticateUser")
      .send(userData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("User Authenticated");
  });

  it("should return status 401 and message 'Incorrect password' if email exists but password is incorrect", async () => {
    let userData = {
      email: "saifaliprasla432@gmail.com",
      password: "Test@1234567",
    };

    const response = await request(app)
      .post("/authenticateUser")
      .send(userData);

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Incorrect password");
  });

  it("should return status 404 and message 'Please register' if email does not exist", async () => {
    const response = await request(app)
      .post("/authenticateUser")
      .send({ email: "test12@dal.ca", password: "Test@12345" });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Please register");
  });
});
