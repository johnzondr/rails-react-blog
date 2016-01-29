var React = require('react');
var CommentBox = require('./comments/CommentBox.jsx');

var comments = [
  {"author": "Pete Hunt", "text": "This is one comment"},
  {"author": "Jordan Walke", "text": "This is *another* comment"}
];

var ShowArticlePage = React.createClass({
	getInitialState: function() {
		return {articleId: ""}
	},
	componentDidMount: function() {
		this.setState({articleId: this.props.params.articleId});
	},
	render: function() {
		return (
			<div>
				<h1> i am article id page {this.state.articleId} </h1>
				<CommentBox data={comments} />
			</div>

		);

	}
});


module.exports = ShowArticlePage;