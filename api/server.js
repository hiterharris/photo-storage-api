const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const filesRouter = require('../files/router');

const server = express();

// Middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// Routes

server.use('/files', filesRouter);

server.get('/', (req, res) => {
    res.json('API up and running');
});

module.exports = server;