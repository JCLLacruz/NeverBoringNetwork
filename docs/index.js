const basicInfo = require('./basicInfo');
const posts = require('./posts');
const components = require('./components');
module.exports = {
    ...basicInfo,
    ...posts,
    ...components
};
