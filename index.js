const express = require('express');
const {dbConnection} = require('./config/config.js');
const app = express();

const PORT = 3001;

dbConnection();

app.use(express.json());
app.use('/users');

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

