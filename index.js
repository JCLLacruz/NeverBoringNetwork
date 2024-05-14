const express = require('express');
const app = express();
const PORT = 3001;
const {dbConnection} = require('./config/config.js');
const path = require('path');

dbConnection();

app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/users',require('./routes/users.js'));
app.use("/posts", require("./routes/posts.js"));
app.use("/hobbies", require("./routes/hobbies.js"));
app.use("/comments", require("./routes/comments.js"));

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

module.exports = app;