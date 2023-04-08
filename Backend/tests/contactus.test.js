describe("POST /contactus", () => {
    it("should create a new request", async () => {
      const dataRequest = {
        firstName: "test",
        lastName: "suite",
        contact: "test123@gmail.com",
      
        describe:"test description"
      };
  
      const response = await request(app).post("/contactus").send(dataRequest);
  
      expect(response.status).toBe(200);
      expect(response.body.status).toBe("success");
    });
  
    it("should return 500 if server is not connected", async () => {
      const existingUser = {
        firstName: "test",
        lastName: "suite",
        contact: "test123@gmail.com",
        describe:"test description"
      };
      const response = await request(app).post("/contactus").send(existingUser);
      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Internal server error");
    });
  });