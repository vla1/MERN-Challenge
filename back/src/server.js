require("./config/config");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const cors = require( 'cors' );
const expressValidator = require('express-validator');

const { gifRouter} = require("./routes")
const server = express();
const port = process.env.PORT || 4000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());
server.use(expressValidator());
// used in requireSignIn method so it works
server.use(cookieParser());
server.use(expressValidator());

server.use(gifRouter);

module.exports = { server, port };