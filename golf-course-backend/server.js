const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const logger = require("morgan");
const knexInstance = require("./db/knex");
const { Model } = require("objection");

const ttimes = require("./routes/ttimesRoutes");
const customers = require("./routes/customersRoutes");
const customers_ttimes = require("./routes/customers-ttimes-routes");

Model.knex(knexInstance);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", ttimes);
app.use("/", customers);
app.use("/", customers_ttimes);

module.exports = { app };
