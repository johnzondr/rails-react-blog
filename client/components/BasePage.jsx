var React = require('react');
var NavBar = require('./NavBar.jsx');

var Router = require('react-router');
var Link = Router.Link;

var BasePage = React.createClass({
	render: function() {
		return (
			<div>
				<NavBar />
				{this.props.children}
			</div>
		);

	}
});


module.exports = BasePage;