const request = require("supertest");
const { app } = require("../server");
const knex = require("../db/knex");
const knexCleaner = require("knex-cleaner");

describe("the customers entity routes", () => {
  beforeEach(done => {
    return knex.migrate.rollback().then(() => {
      knex.migrate.latest().then(() => {
        knex.seed.run().then(() => {
          done();
        });
      });
    });
  });

  afterEach(done => {
    return knex.migrate.rollback().then(() => {
      knex.migrate.latest().then(() => {
        knex.seed.run().then(() => {
          done();
        });
      });
    });
  });

  describe("get all customers", () => {
    it("should fetch all customers succesefully", async () => {
      const res = await request(app).get("/customers");

      expect(res.status).toEqual(200);
      expect(res.body.length).toBeGreaterThanOrEqual(300);
    });
  });

  describe("get one customer", () => {
    it("should fetch one customer succesefully", async () => {
      const id = 1;
      const res = await request(app).get(`/customers/${id}`);

      expect(res.status).toEqual(200);
      expect(res.body).toHaveLength(1);
    });
  });

  describe("get all of one's customers tee times", () => {
    it("should get off the customer's", async () => {
      const id = 1;
      const res = await request(app).get(`/customers/${id}/ttimes`);

      expect(res.status).toEqual(200);
    });
  });

  describe("post a new customer", () => {
    it("should add a new customer succesefully", async () => {
      const newCustomer = {
        name: "John Armbruster",
        company: "Black Magic",
        address: "Candyland",
        email: "some email",
        phone: "some number"
      };
      const res = await request(app)
        .post("/customers")
        .send(newCustomer);

      expect(res.status).toEqual(200);
      expect(res.body).toHaveLength(1);
    });
  });

  describe("update a customer", () => {
    it("should update a customer succesefully", async () => {
      // Setup
      const id = 300;
      const updatedCustomer = { company: "I aim to misbehave" };

      // Do the work that's being tested
      const res = await request(app)
        .patch(`/customers/${id}`)
        .send(updatedCustomer);

      // Test the response
      expect(res.status).toEqual(200);
      expect(res.body[0].company).toEqual("I aim to misbehave");

      // Test the database
      const customers = await knex("customers");
      expect(customers[299].company).toEqual("I aim to misbehave");
    });
  });

  describe("remove one customer", () => {
    it("should remove one customer succesefully", async () => {
      // Setup
      const id = 1;

      // Do the work
      const res = await request(app).delete(`/customers/${id}`);

      // Test the response
      expect(res.status).toEqual(200);
      expect(res.body[0].company).toEqual("PHARMACON");

      // Test the database
      const customers = await knex("customers");
      expect(customers[0].id).toEqual(2);
    });
  });
});
