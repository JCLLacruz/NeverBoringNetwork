const express = require('express');
const app = express();
const PORT = 3001;
const {dbConnection} = require('./config/config.js');

dbConnection()

app.use(express.json());

app.use("/posts", require("./routes/posts.js"));

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

