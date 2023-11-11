/*

SUGGESTION: Create a sample.env file in the root directory and add the required variables for the application
why: New developers will have no idea which variables are required for the application to run
how:
Create a sample.env file in the root directory and add the required variables for the application WITH DEFAULTS
and WITHOUT SENSITIVE VALUES this way devs can copy paste that as .env and add their own secrets themselves

SUGGESTION: create a env.js file in the root directory and add the required variables for the application as a JSON object with the right types
why: Sometimes env variables are integers or booleans and we need to parse them before using them
how:
the env.js file will look something like the following ->
require("dotenv").config();
module.exports = {
  ...
  PORT: parseInt(process.env.PG_PORT), // will parse the string to an integer
  PG_USER: process.env.PG_USER || 'postgres', // you can define defaults if values don't exist in .env
  ...
}
and it will be used in other files like so ->
const ENV = require('<path>/env.js');
console.log(ENV.PORT); // will output whatever PORT in .env is set to

*/
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

/*

SUGGESTION: I prefer await/async over .then/.catch
why: It's easier to read and write since it follows the sequences of events
how:
Technically this connect() code isn't doing anything since pg promise will make a new connection per query, but just to see both side by side simply ->
This is how I would rewrite the following code with async/await ->
const dbConnection = async () => {
  try {
    const connection = await db.connect();
    console.log("[INFO] Postgres connection established");
    connection.done();
  } catch (error) {
    console.error("[ERROR] Database Connection Failed: ", error.message || error);
  }
};

*/
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
