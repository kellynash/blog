var React =require('react');
var BlogBox = require('./BlogBox');
// var BlogComment = require ('./BlogComment');

React.render(<BlogBox url="/api/blogs"/>, document.getElementById('BlogList'));