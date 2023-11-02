require("dotenv").config();
const pgp = require("pg-promise")();
require("dotenv").config();
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};
const db = pgp(cn);
db.connect()
  .then((obj) => {
    const serverVersion = obj.client.serverVersion;
    console.log("postgres connection established");
    obj.done();
  })
  .catch((error) => {
    console.log("ERROR", error.message || error);
  });
module.exports = db;
