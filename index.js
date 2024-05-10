const express = require('express');
const {dbConnection} = require('./config/config.js');
const app = express();

const PORT = 3001;

app.use(express.json());

app.list(PORT, ()=> console.log(`Server started on port ${PORT}`));

