"use strict";
const baseURL = "http://127.0.0.1:5000";
const request = require("supertest");

describe("Register Controller Functionality", () => {
    const user = {
        fullName: "test",
        email: "test@gmail.com",
        userName: "test",
        password: "test",
    };

    afterAll(async () => {
        await request(baseURL).delete(`/register/${user.userName}`);
    });

    describe("Valid Registration", () => {
        it("should register a new user with valid input", async () => {
            const response = await request(baseURL).post("/register").send(user);
            expect(response.statusCode).toBe(201);
            expect(response.body.message).toBe(`New user ${user.userName} created!`);
        });
    });

    describe("Invalid Registration", () => {
        const invalidUser = {
            fullName: "test",
            email: "invalid_email",
            userName: "test",
            password: "weak",
        };

        it("should handle registration with an existing username", async () => {
            invalidUser.userName = "rs3523";
            const response = await request(baseURL).post("/register").send(invalidUser);
            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe("Username already exists");
        });


        it("should handle registration with missing fields", async () => {
            const response = await request(baseURL).post("/register").send({
                fullName: "",
                email: "",
                userName: "",
                password: "",
            });
            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe("All Fields are required.");
        });
    });

    describe("Delete User", () => {
        it("should delete an existing user", async () => {
            const response = await request(baseURL).delete(`/register/${user.userName}`);
            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe(`user ${user.userName} deleted successfully`);
        });

        it("should handle deleting a non-existing user", async () => {
            const response = await request(baseURL).delete("/register/nonexistentuser");
            expect(response.statusCode).toBe(400);
            expect(response.body.message).toBe(`No existing username nonexistentuser`);
        });
    });
});
