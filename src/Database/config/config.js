require("dotenv").config();

console.log("dburl", process.env.DbConnection);
module.exports = {
  development: {
    url: process.env.DbConnection,
    dialect: "postgres",
    
  },
  test: {
    url: process.env.DbConnection,
    dialect: "postgres",
  },
  production: {
    url: process.env.DbConnection,
    dialect: "postgres",
  },
};