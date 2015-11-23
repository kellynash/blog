var React = require('react');

var BlogComment = React.createClass({
	handleCommentSubmit: function(e){
		e.preventDefault();

		var blogID = this.props.blogID;
		var body = this.refs.body.getDOMNode().value;
		if(!body){
			return;
		}
		var data = ({body: body});
		var self = this;
			$.ajax({
				url: 'api/blogs/' + blogID + '/comment',
				dataType: 'json',
				data: data,
				type: 'POST',
					success: function(data){

						if(this.props.onPost){
							this.props.onPost()
						}

					console.log("posting data!" + data)
					// document.location='/indexblog.html'
					}.bind(this),
					error: function(xhr, status, err){
						console.log("not posting data!")
						console.error(this.props.url, status, err.toString());
					}.bind(this)	
		})
			this.refs.body.getDOMNode().value = ''
	},

	render: function() {
		return (
			<div className="panel panel-default col-xs-10 col-xs-offset-1">
				<div className="row col-xs-10 col-xs-offset-1">
				<form action className="/api/blogs" role="form">
					<h4 className="well well-sm">Add a comment</h4>
					<div className="form-group" method="POST">
						<label htmlFor="body">Put your two cents below!</label>
						<textarea name="body" type="text" className="form-control" ref="body" placeholder="Input field" rows="5"/>
					</div>
					<button onClick={this.handleCommentSubmit}  type="submit" className="btn btn-primary"> Submit </button>
				</form>
				</div>
			</div>
		);ß
	}
});

module.exports = BlogComment;

