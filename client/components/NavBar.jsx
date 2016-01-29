var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NavBar = React.createClass({
	render: function() {
		return (
			<div>
				<Link to="/"><h2>Home</h2></Link>
				<Link to="/new"><h2>Contribute a Post</h2></Link>
			</div>
		);
	}
});

module.exports = NavBar;

