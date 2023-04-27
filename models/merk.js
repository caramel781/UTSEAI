const database = require("../config/database");

const readSingleMerkMotor = (merk) => {
  const query = `SELECT * FROM merk where merk='${merk}'`;
  return database.execute(query);
};

const readMerkMotor = () => {
  const query = `SELECT * FROM merk`;
  return database.execute(query);
};

const createMerkMotor = (merk) => {
  const query = `INSERT INTO merk (merk) VALUES ('${merk}')`;
  return database.execute(query);
};

module.exports = {
  readSingleMerkMotor,
  readMerkMotor,
  createMerkMotor,
};
