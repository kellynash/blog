var React = require('react');

var BlogList = React.createClass({
	//Loop through our data and create tweets
	render: function() {
		var blogData = this.props.data.map(function(blogItem){
			return (
				<article className="panel panel-default col-xs-10 col-xs-offset-1">
				<header className="panel-heading">
				<h3 className="panel-title">{blogItem.title}</h3>
				</header>
				<section className="article-body">{blogItem.body}</section>
				</article>
				);
		});
		return (
			<div>
			{blogData}
        </div>
        );
    }
});

var BlogBox = React.createClass({
	getInitialState: function() {
		return {data: []};
	},

	loadBlogsFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				console.log("inside success")
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err){
				console.log("broken url is " + this.props.url)
				console.error(this.props.url, status, err.toString());
			}.bind(this)	
		});
	},

	componentDidMount: function() {
		this.loadBlogsFromServer();
	},
	//Set initial state
	//Fetch data from our server (AJAX)
	//Mount our data (state)
	//Display tweet list
    render: function() {
        return (
        
          <BlogList data={this.state.data}/>
          	
        );
    }
});


module.exports = BlogBox;
