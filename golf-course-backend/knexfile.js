let connectionString =
  process.platform === "win32"
    ? "postgres://postgres:root@localhost/golf-course"
    : "postgres://localhost/golf-course";

module.exports = {
  development: {
    client: "pg",
    connection: "postgress://localhost/golf-course",
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  }
};
