const posts = require("./posts.js");
const users = require("./users.js");

module.exports = {
    paths: {
        ...posts,
        ...users
    }
};
