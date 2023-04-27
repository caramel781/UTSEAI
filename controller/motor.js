const modelMotor = require("../models/motor");

const createMotor = async (req, res) => {
  const body = req.body;
  try {
    await modelMotor.createMotor(body);
    res.status(201).json({
      message: "Motor berhasil ditambahkan",
      status: 201,
      timestamp: new Date().toLocaleTimeString(),
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
      status: 500,
      timestamp: new Date().toLocaleTimeString(),
    });
  }
};

const readMotor = async (req, res) => {
  const params = req.query;
  try {
    let [motor] = await modelMotor.readMotor(params);
    if (motor.length == 1) {
      motor = motor[0];
    }
    res.status(200).json({
      message: "Berhasil mendapatkan data motor",
      status: 200,
      timestamp: new Date().toLocaleTimeString(),
      data: motor,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
      status: 500,
      timestamp: new Date().toLocaleTimeString(),
    });
  }
};

const updateMotor = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await modelMotor.updateMotor(id, body);
    res.status(200).json({
      message: `Motor dengan id ${id} berhasil diupdate`,
      status: 200,
      timestamp: new Date().toLocaleTimeString(),
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
      status: 500,
      timestamp: new Date().toLocaleTimeString(),
    });
  }
};

const deleteMotor = async (req, res) => {
  const id = req.params.id;
  try {
    await modelMotor.deleteMotor(id);
    res.status(200).json({
      message: `Motor dengan id ${id} berhasil dihapus`,
      status: 200,
      timestamp: new Date().toLocaleTimeString(),
    });
  } catch (error) {
    res.status(500).json({
      message: error,
      status: 500,
      timestamp: new Date().toLocaleTimeString(),
    });
  }
};

module.exports = {
  createMotor,
  readMotor,
  updateMotor,
  deleteMotor,
};
