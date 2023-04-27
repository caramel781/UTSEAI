require("dotenv").config();
const controllerUser = require("./controller/user");
const controllerMotor = require("./controller/motor");
const controllerMerk = require("./controller/merk");
const authenticate = require("./middleware/authenticate");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/registrasi", controllerUser.createUser);
app.post("/login", controllerUser.readUser);
app.get("/merk", authenticate, controllerMerk.readMerkMotor);
app.post("/merk", authenticate, controllerMerk.createMerkMotor);
app.get("/motor", authenticate, controllerMotor.readMotor);
app.post("/motor", authenticate, controllerMotor.createMotor);
app.delete("/motor/:id", authenticate, controllerMotor.deleteMotor);
app.patch("/motor/:id", authenticate, controllerMotor.updateMotor);

app.listen(process.env.PORT, () => {
  console.log(`Listening at port ${process.env.PORT}`);
});
