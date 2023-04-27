const database = require("../config/database");

const createUser = (body) => {
  const query = `INSERT INTO user (name, email, password) 
                  VALUES ('${body.name}', '${body.email}', '${body.password}')`;
  return database.execute(query);
};

const readUser = (email) => {
  const query = `SELECT * FROM user WHERE email='${email}'`;
  return database.execute(query);
};

module.exports = {
  readUser,
  createUser,
};
