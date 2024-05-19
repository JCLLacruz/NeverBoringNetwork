const posts = require("./posts")
const comments = require("./comments")

module.exports = {
    paths: {
        ...posts,
        ...comments
    }
}
