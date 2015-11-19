var React = require ('react');
var Github = require ('./Github');

var GitBox = React.createClass({
	getInitialState: function(){
		return {data: []};
	},

	loadGitData: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function(data){
				console.log(data)
				this.setState({ data: data });
			}.bind(this), 
			error: function(err){
				console.log(err)
			}.bind(this)
		})
	},

	componentDidMount: function(){
		this.loadGitData();
	},

	render: function() {
		return (
			<div>
				<Github data={this.state.data}/>
			</div>
		);
	}
});

// var GitBox = React.createClass({
// 	getInitialState: function() {
// 		return {data: []};
// 	},

// 	loadGitsFromServer: function() {
// 		$.ajax({
// 			url: this.props.url,
// 			dataType: 'json',
// 			cache: false,
// 			success: function(data) {
// 				console.log("inside success")
// 				this.setState({data: data});
// 			}.bind(this),
// 			error: function(xhr, status, err){
// 				console.log("broken url is " + this.props.url)
// 				console.error(this.props.url, status, err.toString());
// 			}.bind(this)	
// 		});
// 	},

// 	componentDidMount: function() {
// 		this.loadGitsFromServer();
// 	},
// 	//Set initial state
// 	//Fetch data from our server (AJAX)
// 	//Mount our data (state)
// 	//Display tweet list
//     render: function() {
//         return (
        
//           <Github data={this.state.data}/>
          	
//         );
//     }
// });

module.exports = GitBox;