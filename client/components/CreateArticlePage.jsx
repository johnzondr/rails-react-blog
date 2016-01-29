var React = require('react');
var CreateArticleContainer = require('./CreateArticleContainer.jsx');

var CreateArticlePage = React.createClass({
	render: function() {
		return (
			<div>
			<h1>Create Article Page</h1>
				<CreateArticleContainer />
			</div>
		);

	}
});


module.exports = CreateArticlePage;