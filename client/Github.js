var React = require('react');

var Github = React.createClass({
	render: function(){
	    var gitStuff = this.props.data.map(function (g){
	      if (g.coms) {
	        var commitInfo = g.coms.map(function (c){
	          return(
	            <div>
	              <p>{c.message}</p>
	            </div>
	          )
	        });
	      };

		return(
		<div className="col-md-4">
			<div className="panel panel-default box">
				<h3 className="panel-header">Recent GitHub Commits:</h3>
				<div className="panel-body">
					<h4>Repo Name:</h4>
					<p>{g.repo}</p>
					<h4>Commit Message:</h4>
					<p>{commitInfo}</p>		
					</div>
					<div className="panel-footer">
						<p>Time Stamp: {g.timeStamp} </p>
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



