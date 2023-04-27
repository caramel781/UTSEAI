const database = require("../config/database");

const createMotor = (body) => {
  const query = `INSERT INTO motor (id_merk, nama_motor, kapasitas_mesin, kapasitas_tangki, torsi_maksimal) 
                    VALUES (${body.id_merk}, '${body.nama_motor}', '${body.kapasitas_mesin}', '${body.kapasitas_tangki}', '${body.torsi_maksimal}')`;
  return database.execute(query);
};

const readMotor = (params) => {
  const eachParams = Object.keys(params);
  if (eachParams.length == 0) {
    const query = `SELECT merk.merk, motor.nama_motor, motor.kapasitas_mesin, motor.kapasitas_tangki, motor.torsi_maksimal FROM motor JOIN merk ON motor.id_merk = merk.id`;
    return database.execute(query);
  } else {
    let param = "";
    eachParams.forEach((p) => {
      param += `${p}='${params[p]}' AND `;
    });
    param = param.substring(0, param.length - 5);
    const query = `SELECT merk.merk, motor.nama, motor.kapasitas_mesin, motor.kapasitas_tangki, motor.torsi_maksimal FROM motor JOIN merk ON motor.id_merk = merk.id WHERE ${param}`;
    return database.execute(query);
  }
};

const updateMotor = (id, body) => {
  let setQuery = "";
  const eachQuery = Object.keys(body);
  eachQuery.forEach((q) => {
    setQuery += `${q}='${body[q]}', `;
  });
  setQuery = setQuery.slice(0, -2);
  const query = `UPDATE motor
                SET ${setQuery}
                WHERE id=${id}`;
  return database.execute(query);
};

const deleteMotor = (id) => {
  const query = `DELETE FROM motor WHERE id=${id}`;
  return database.execute(query);
};

module.exports = {
  createMotor,
  readMotor,
  updateMotor,
  deleteMotor,
};
