const request = require("supertest");
const app = require("../../app");

it("returns a 201 on successful signup", async () => {
  return request(app)
    .post("/users/register")
    .send({
      username: "sampleusername",
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
});
