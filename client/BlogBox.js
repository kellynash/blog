var React = require('react');
var BlogComment = require('./BlogComment');


var BlogList = React.createClass({
	//Loop through our data and create tweets
	render: function() {
		var self = this;
		var blogData = this.props.data.map(function(blogItem){
			console.log(blogItem);
			if (blogItem.comments.length > 0) {
		        var blogComment = blogItem.comments.map(function (c){
		        	return(
		        		<div className="comment">
		        			<h5 className="well well-sm custColor2 col-xs-4">Comment added by: {c.user.local.userName}</h5>
		        			<p className="commentBody col-xs-10"> {c.body} </p>
		        		</div>
		        	)
		        });
	        } else {
	        	var blogComment = "(No comments yet.)"
	        };

			return (
				<div className="container">
				<div className="row">
				<article className="panel panel-default col-xs-10 col-xs-offset-1">
				<h4 className="well well-sm col-xs-3 col-xs-offset-4 custColor centerTitle">{blogItem.title}</h4>
				<section className="article-body blogText col-xs-10 col-xs-offset-1">{blogItem.body}</section>
				<br className="break"></br>
				<br className="break"></br>
				<h4 className="well well-sm col-xs-3 col-xs-offset-4 custColor2 centerTitle">Comments from readers...</h4>
				<section className="article-body col-xs-8">{blogComment}</section>
				</article>
				<BlogComment blogID={blogItem._id} onPost={self.props.newData}/>
				</div>
				</div>
			)
		}.bind(this));
	
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
    	var self = this;
    	var doRefresh = function(){
    		self.loadBlogsFromServer()
    	}
        return (
        	<div>
          	<BlogList data={this.state.data} newData={doRefresh}/>
          	</div>
        );
    }
});


module.exports = BlogBox;
