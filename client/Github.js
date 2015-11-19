var React = require('react');

var Github = React.createClass({
	render: function(){
	    var gitStuff = this.props.data.map(function (g){
	      if (g.coms) {
	        var commitInfo = g.coms.map(function (c){
	          return(
	            <div>
	              <p>{c.message}</p>
	              <p>{c.url}</p>
	            </div>
	          )
	        });
	      };

		return(
		<div className="col-md-4">
			<div className="panel panel-default box">
				<h3 className="panel-header">Repo Name:</h3>
				<div className="panel-body">
					<p>{g.repo}</p>
					<p>{commitInfo}</p>		
					</div>
					<div className="panel-footer">
						<p>ID: {g.id} </p>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div>
			{gitStuff}
		</div>
		);
	}
});



module.exports = Github;
//React.render(<GitBox url="/api/github/"/>, document.getElementById('GithubData'));



