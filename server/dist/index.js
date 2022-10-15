"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _connection = _interopRequireDefault(require("./database/connection"));

var _index = _interopRequireDefault(require("./api/auth/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const zomato = (0, _express.default)();
zomato.use(_express.default.json());
zomato.get('/', (req, res) => {
  res.json({
    message: "Server is running"
  });
}); //auth/signup

zomato.use("/auth", _index.default);
const PORT = 4000;
zomato.listen(PORT, () => {
  (0, _connection.default)().then(() => {
    console.log("Server is running !!!");
  }).catch(error => {
    console.log("Server is running, but database connection failed...");
    console.log(error);
  });
});