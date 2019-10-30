const request = require("supertest");
const { app } = require("../server");
const knex = require("../db/knex");

describe("the customers-ttimes routes", () => {
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

  describe("add a customer to a ttime", () => {
    it("should add a customer to a ttime succesefully", async () => {
      const newCustomer = {
        customer_id: 1,
        tee_time_id: 1
      };
      const res = await request(app)
        .post("/customers/ttimes")
        .send(newCustomer);

      expect(res.status).toEqual(200);
      expect(res.body).toHaveLength(1);
    });
  });

  describe("remove a customer from a ttime", () => {
    it("should remove a customer from a ttime succesefully", async () => {
      const id = 1;

      const res = await request(app).delete(`/customers/ttimes/${id}`);

      expect(res.status).toEqual(200);
      expect(res.body[0].customer_id).toEqual(142);

      const customers_ttimes = await knex("customers-ttimes");
      expect(customers_ttimes[0].customer_id).toEqual(290);
    });
  });
});
