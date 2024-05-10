const express = require('express');
const {dbConnection} = require('./config/config.js');
const app = express();
dbConnection();

const PORT = 3001;

app.use(express.json());
//app.use()

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

