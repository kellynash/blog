var React = require('react');

var BlogComment = React.createClass({
	handleCommentSubmit: function(e){
		e.preventDefault();

		var blogID = this.props.blogID;
		var body = React.findDOMNode(this.refs.body).value.trim();

		if(!body){
			return;
		}
		var data = ({body: body});

			$.ajax({
				url: 'api/blogs/' + blogID + '/comment',
				dataType: 'json',
				data: data,
				type: 'POST',
					success: function(data){
					console.log("posting data!" + data)
					//success: function(response) {
					//console.log("posting data!", data, response)
					document.location='/indexblog.html'
					}.bind(this),
					error: function(xhr, status, err){
						console.log("not posting data!")
						console.error(this.props.url, status, err.toString());
					}.bind(this)	
		})
	},

	render: function() {
		return (
			<div className="container panel panel-default col-xs-10 col-xs-offset-1">
				<div className="row">
				<form action className="/api/blogs" role="form">
					<legend>Add a comment</legend>

					<div className="form-group" method="POST">
						<label htmlFor="body">Comment Body</label>
						<textarea name="body" type="text" className="form-control" ref="body" placeholder="Input field" rows="5"/>
					</div>

					<button onClick={this.handleCommentSubmit}  type="submit" className="btn btn-primary"> Submit </button>
				</form>
				</div>
			</div>
		);
	}
});

module.exports = BlogComment;

