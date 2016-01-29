var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ArticleBlurb = React.createClass({
	render: function() {
		var url = "/articles/"+this.props.articleId;
		return (
			<div>
				<h1><Link to={url}> a new article </Link></h1>
				<h3> {this.props.title} </h3>
				<h4> {this.props.author} </h4>
				{this.props.content} 
			</div>
		);
	}
});

module.exports=ArticleBlurb;
