const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

beforeEach(async () => {
    await mongoose.connect(
      "mongodb+srv://ecycle:ecycle@cluster0.uwe8xva.mongodb.net/?retryWrites=true&w=majority"
    );
  });
  
  afterEach(async () => {
    await mongoose.connection.close();
  });

describe("POST /requestpickup", () => {
    it("should create a new request", async () => {
      const dataRequest = {
        firstName: "test",
        lastName: "suite",
        contact: "test123@gmail.com",
        address: "test address",
        describe:"test description"
      };
  
      const response = await request(app).post("/requestpickup").send(dataRequest);
  
      expect(response.status).toBe(200);
      expect(response.body.status).toBe("success");
    });
  
    it("should return 500 if server is not connected", async () => {
      const existingUser = {
        firstName: "test",
        lastName: "suite",
        contact: "test123@gmail.com",
        address: "test address",
        describe:"test description"
      };
      const response = await request(app).post("/requestpickup").send(existingUser);
      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Internal server error");
    });
  });

  