var React = require('react');

var BasePage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello</h1>
				{this.props.children}
			</div>
		);

	}
});


module.exports = BasePage;