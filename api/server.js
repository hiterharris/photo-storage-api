const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../usersDb/users-router.js');
const filesRouter = require('../filesDb/files-router.js');
const restricted = require('../auth/restricted-middleware');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);
server.use('/api/files', filesRouter);

server.get('/', (req, res) => {
  res.send("Photo Storage API");
});

module.exports = server;
