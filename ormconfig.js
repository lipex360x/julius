require("dotenv").config();

module.exports = {
   "type": "postgres",
   "host": process.env.CLI_HOST,
   "port": 5432,
   "username": process.env.ORM_USER,
   "password": process.env.ORM_PASS,
   "database": process.env.ORM_DATABASE,

   "entities": ["src/entity/**/*.ts"],
   "migrations": ["src/migration/**/*.ts"],
   "subscribers": ["src/subscriber/**/*.ts"],

   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
   }
}