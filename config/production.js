const path = require("path");

module.exports = {
  knex: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "codechain-keystore",
      user: process.env.DB_USER || "codechain",
      user: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: path.resolve(__dirname, "..", "migrations"),
      tableName: "knex"
    },
    seeds: {
      directory: path.resolve(__dirname, "..", "seeds")
    }
  },
};
