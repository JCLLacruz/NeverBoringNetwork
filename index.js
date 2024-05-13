const express = require('express');
const {dbConnection} = require('./config/config.js');
const app = express();

const PORT = 3001;

dbConnection();

app.use(express.json());

app.use('/users',require('./routes/users.js'));

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));