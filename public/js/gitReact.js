var Github = React.createClass({
	render: function(){
		var gitData = this.props.data.map(function(git){ 
		return(
			<div className="col-md-4">
				<div className="panel panel-default box">
					<h3 className="panel-header">Repo Name</h3>
					<div className="panel-body">
						Payload
					</div>
					<div className="panel-footer">
						id
					</div>
				</div>
			</div>
		);
	});
	return (
		<div>
			{gitData}
		</div>
		);
	}
});

var GitBox = React.createClass({
	getInitialState: function() {
		return {data: []};
	},

	loadGitsFromServer: function() {
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
		this.loadGitsFromServer();
	},
	//Set initial state
	//Fetch data from our server (AJAX)
	//Mount our data (state)
	//Display tweet list
    render: function() {
        return (
        
          <Github data={this.state.data}/>
          	
        );
    }
});



React.render(<GitBox url="/api/github"/>, document.getElementById('GithubData'));



