const database = require("../config/database");

const readSingleMerkMotor = (merk) => {
  const query = `SELECT * FROM merk_motor where merk='${merk}'`;
  return database.execute(query);
};

const readMerkMotor = () => {
  const query = `SELECT * FROM merk_motor`;
  return database.execute(query);
};

const createMerkMotor = (merk) => {
  const query = `INSERT INTO merk_motor (merk) VALUES ('${merk}')`;
  return database.execute(query);
};

module.exports = {
  readSingleMerkMotor,
  readMerkMotor,
  createMerkMotor,
};
