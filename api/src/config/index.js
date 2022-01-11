const { PORT, HOST, MONGO_URL } = process.env;

module.exports.PORT = PORT || 8080;
module.exports.HOST = HOST;
module.exports.DB = MONGO_URL;
