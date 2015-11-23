var React = require('react');
var BlogComment = require('./BlogComment');

var BlogList = React.createClass({
	//Loop through our data and create tweets
	render: function() {
		var blogData = this.props.data.map(function(blogItem){
			console.log(blogItem);
			if (blogItem.comments.length > 0) {
		        var blogComment = blogItem.comments.map(function (c){
		        	return(
		        		<div className="comment">
		        			<p className="commentBody"> {c.body} </p>
		        		</div>
		        	)
		        });
	        } else {
	        	var blogComment = "no comment yet"
	        };

			return (
				<div>
				<article className="panel panel-default col-xs-10 col-xs-offset-1">
				<h4 className="well well-sm">{blogItem.title}</h4>
				<section className="article-body">{blogItem.body}</section>
				<br className="break"></br>
				// <br className="break"></br>
				<h4 className="well well-sm">Comments from readers...</h4>
				<section className="article-body">{blogComment}</section>
				</article>
					<BlogComment blogID={blogItem._id}/>
				</div>
			)
		});
	
		return (
			<div>
				{blogData}
	    	</div>
	    )
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
	//Display blog list
    render: function() {
        return (
        
          <BlogList data={this.state.data}/>
          	
        );
    }
});


module.exports = BlogBox;
