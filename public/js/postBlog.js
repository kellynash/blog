var BlogForm = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();

		var title = React.findDOMNode(this.refs.title).value.trim();
		var body = React.findDOMNode(this.refs.body).value.trim();

		if(!title){
			return;
		}

		var data = ({title: title, body: body});

			$.ajax({
				url: this.props.url,
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
		React.findDOMNode(this.refs.title);
	},

	render: function() {
		return (

			<div className="container panel panel-default col-xs-10 col-xs-offset-1">
				<div className="row">
				<form action className="/api/blogs" role="form">
					<legend>Add a blog entry</legend>

					<div className="form-group" method="POST">
						<label for="title">Blog Title</label>
						<input name="title" type="text" className="form-control" ref="title" placeholder="Input field"/>
					</div>

					<div className="form-group" method="POST">
						<label for="body">Blog Body</label>
						<textarea name="body" type="text" className="form-control" ref="body" placeholder="Input field" rows="5"/>
					</div>
					<button onClick={this.handleSubmit} type = "submit" className="btn btn-primary"> Submit </button>
				</form>
				</div>
			</div>
		);

	}
});


React.render(<BlogForm url="/api/blogs/"/>, document.getElementById('blogPost'));
