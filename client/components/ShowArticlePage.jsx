var React = require('react');

var ShowArticlePage = React.createClass({
	getInitialState: function() {
		return {articleId: ""}
	},
	componentDidMount: function() {
		this.setState({articleId: this.props.params.articleId});
	},
	render: function() {
		return (
			<h1> i am article id page {this.state.articleId} </h1>
		);

	}
});


module.exports = ShowArticlePage;