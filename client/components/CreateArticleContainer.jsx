var React = require('react');
var ArticleForm = require('./ArticleForm.jsx');

var CreateArticleContainer = React.createClass({
    render: function() {
        return (
            <div className="">
                <ArticleForm />
            </div>
        );
    }
});


module.exports = CreateArticleContainer;