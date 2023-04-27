require("dotenv").config();
const jsonwebtoken = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authenticate = req.headers.authorization;
  if (authenticate) {
    const token = authenticate.split(" ")[1];
    jsonwebtoken.verify(token, process.env.SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          status: 403,
          message: "Token tidak valid",
          timestamp: new Date().toLocaleTimeString(),
        });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({
      status: 401,
      message: "Login untuk mendapatkan token",
      timestamp: new Date().toLocaleTimeString(),
    });
  }
};

module.exports = authenticate;
