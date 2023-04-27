const modelMerk = require("../models/merk");

const readMerkMotor = async (req, res) => {
  try {
    const [data] = await modelMerk.readMerkMotor();
    res.status(200).json({
      message: "Data merk mobil berhasil diambil",
      status: 200,
      timestamp: new Date().toLocaleTimeString(),
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
      status: 500,
      timestamp: new Date().toLocaleTimeString(),
    });
  }
};

const createMerkMotor = async (req, res) => {
  const merk = req.body.merk;
  const [cekMerk] = await modelMerk.readSingleMerkMotor(merk);
  if (cekMerk.length === 1) {
    res.status(400).json({
      message: "Merk sudah terdaftar",
      status: 400,
      timestamp: new Date().toLocaleTimeString(),
    });
  } else {
    try {
      await modelMerk.createMerkMotor(merk);
      res.status(201).json({
        message: "Merk berhasil dibuat",
        status: 201,
        timestamp: new Date().toLocaleTimeString(),
      });
    } catch (error) {
      res.status(500).json({
        message: error,
        status: 500,
        timestamp: new Date().toLocaleTimeString(),
      });
    }
  }
};

module.exports = {
  readMerkMotor,
  createMerkMotor,
};
