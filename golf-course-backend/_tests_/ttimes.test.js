const request = require("supertest");
const { app } = require("../server");
const knex = require("../db/knex");

describe("the ttimes entity routes", () => {
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

  describe("get all ttimes", () => {
    it("should fetch all ttimes succesefully", async () => {
      const res = await request(app).get("/ttimes");

      expect(res.status).toEqual(200);
      expect(res.body.length).toBeGreaterThanOrEqual(500);
    });
  });

  describe("get one ttime", () => {
    it("should fetch a ttime succesefully", async () => {
      const id = 1;
      const res = await request(app).get(`/ttimes/${id}`);

      expect(res.status).toEqual(200);
      expect(res.body).toHaveLength(1);
    });
  });

  describe("get all customers going to one ttime", () => {
    it("should fetch all customers going to one ttime succesefully", async () => {
      const id = 1;
      const res = await request(app).get(`/ttimes/${id}/customers`);

      expect(res.status).toEqual(200);
    });
  });

  describe("post a new ttime", () => {
    it("should add a new ttime succesefully", async () => {
      const newTtime = {
        time: "Hammer Time"
      };

      const res = await request(app)
        .post("/ttimes")
        .send(newTtime);

      expect(res.status).toEqual(200);
      expect(res.body).toHaveLength(1);
    });
  });

  describe("update a ttime", () => {
    it("should update a ttime succesefully", async () => {
      const id = 500;
      const updatedTtime = { time: "Party Time" };

      const res = await request(app)
        .patch(`/ttimes/${id}`)
        .send(updatedTtime);

      expect(res.status).toEqual(200);
      expect(res.body[0].time).toEqual("Party Time");

      const ttimes = await knex("ttimes");
      expect(ttimes[499].time).toEqual("Party Time");
    });
  });

  describe("remove one ttime", () => {
    it("should remove one ttime succesefully", async () => {
      const id = 1;

      const res = await request(app).delete(`/ttimes/${id}`);

      expect(res.status).toEqual(200);
      expect(res.body[0].time).toEqual("2019-12-09T01:57:19+07:00");

      const ttimes = await knex("ttimes");
      expect(ttimes[0].id).toEqual(2);
    });
  });
});
