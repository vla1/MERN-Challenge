const { connect } = require("mongoose");
const { config } = require("../config/config");

function connectDB() {
    return connect(config.db);
}

module.exports = { connectDB };