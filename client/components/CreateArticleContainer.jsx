var React = require('react');
var ArticleForm = require('./ArticleForm.jsx');

var CreateArticleContainer = React.createClass({
    render: function() {
        return (
            <div className="">
                <h1>Create a New Blog</h1>
                <ArticleForm />
            </div>
        );
    }
});


module.exports = CreateArticleContainer;