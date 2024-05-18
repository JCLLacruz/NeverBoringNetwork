const posts = require("./posts.js");
const users = require("./users.js");
const tags = require("./tags.js");

module.exports = {
    paths: {
        ...posts,
        ...users,
        ...tags
    }
};
