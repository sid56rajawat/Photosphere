const baseURL = "127.0.0.1:5000";
const request = require("supertest");

describe("Login Controller Functionality", () => {
  const user = {
    fullName: "test",
    email: "test@gmail.com",
    userName: "test",
    password: "test",
  };
  beforeAll(async () => {
    await request(baseURL).post("/register").send(user);
  });
  afterAll(async () => {
    const response = await request(baseURL).delete(
      `/register/${user.userName}`
    );
  });

  describe("Empty Input", () => {
    const body = {
      userName: "",
      password: "",
    };
    it("both empty should return 400", async () => {
      const response = await request(baseURL).post("/login").send(body);
      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe(
        "Both Username and Password are required."
      );
    });
    body.userName = "no user";
    it("empty password should return 400", async () => {
      const response = await request(baseURL).post("/login").send(body);
      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe(
        "Both Username and Password are required."
      );
    });
    body.userName = "";
    body.password = "pass";
    it("empty username should return 400", async () => {
      const response = await request(baseURL).post("/login").send(body);
      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe(
        "Both Username and Password are required."
      );
    });
  });

  describe("Invalid Input", () => {
    const body = {
      userName: "invalid",
      password: "invalid",
    };
    it("Incorrect username returns 401", async () => {
      const response = await request(baseURL).post("/login").send(body);
      expect(response.statusCode).toBe(401);
      expect(response.body.message).toBe("Enter valid username");
    });

    body.userName = "test";
    body.password = "Pass@123";
    it("Incorrect password returns 401", async () => {
      const response = await request(baseURL).post("/login").send(body);
      expect(response.statusCode).toBe(401);
      expect(response.body.message).toBe("Enter valid password");
    });
  });
});
