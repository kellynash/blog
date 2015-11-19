var React = require('react');
var GitBox = require('./GitData'); 

React.render(<GitBox url='/api/github'/>, document.getElementById("GithubData"));
