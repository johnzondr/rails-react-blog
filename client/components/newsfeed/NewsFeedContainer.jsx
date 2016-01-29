var React = require('react');
var ArticleBlurb = require('./ArticleBlurb.jsx');

// var List = require('./List.jsx');

var NewsFeedContainer = React.createClass({
    render: function() {
    	var createBlurb = function(articleItem, index) {
    		return <ArticleBlurb key={articleItem.author+index} articleId={articleItem.id} title={articleItem.title} author={articleItem.author} content={articleItem.content} />;
    	}
        return (
            <div>
                <h3>recent articles</h3>
                <ul>{this.props.articles.map(createBlurb)}</ul>

            </div>
        );
    }
});



module.exports = NewsFeedContainer;
