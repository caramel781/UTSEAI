const modelUser = require("../models/user");
const jsonwebtoken = require("jsonwebtoken");

const readUser = async (req, res) => {
  const body = req.body;
  try {
    let [user] = await modelUser.readUser(body.email);
    if (user.length === 1) {
      user = user[0];
      if (body.password == user.password) {
        jsonwebtoken.sign(
          {
            name: user.name,
            email: user.email,
          },
          process.env.SECRET,
          (err, token) => {
            res.status(200).json({
              message: "Berhasil login",
              status: 200,
              timestamp: new Date().toLocaleTimeString(),
              token,
            });
          }
        );
      } else {
        res.status(401).json({
          message: "Salah password",
          status: 401,
          timestamp: new Date().toLocaleTimeString(),
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      serverMessage: error,
      timestamp: new Date().toLocaleTimeString(),
    });
  }
};

const createUser = async (req, res) => {
  const body = req.body;
  const [cekUser] = await modelUser.readUser(body.email);

  if (cekUser.length === 1) {
    res.status(400).json({
      timestamp: new Date().toLocaleTimeString(),
      status: 400,
      message: "Email sudah terdaftar",
    });
  } else {
    try {
      await modelUser.createUser(body);
      res.status(201).json({
        timestamp: new Date().toLocaleTimeString(),
        status: 201,
        message: "Registrasi berhasil",
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
  readUser,
  createUser,
};
