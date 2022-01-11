const mongoose = require("mongoose");
const { DB } = require("../config");

module.exports.connectDB = () => {
  mongoose.connect(DB, { useNewUrlParser: true });
  return mongoose.connection;
};
