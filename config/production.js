const path = require("path");

console.log(process.env);
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
    debug: true,
    pool: {
      min: 2,
      max: 6,
      createTimeoutMillis: 3000,
      acquireTimeoutMillis: 30000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100,
      propagateCreateError: false // <- default is true, set to false
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
