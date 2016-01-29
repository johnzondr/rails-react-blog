var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ArticleBlurb = React.createClass({
	render: function() {
		var url = "/articles/"+this.props.articleId;
		return (
			<div>
				<h1><Link to={url}> a new article </Link></h1>
				{this.props.title}
				{this.props.author}
				{this.props.content}
			</div>
		);
	}
});

module.exports=ArticleBlurb;
