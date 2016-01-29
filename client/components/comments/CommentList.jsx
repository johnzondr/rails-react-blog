var React = require('react');
var Comment = require('./Comment.jsx');

var CommentList = React.createClass({
    render: function() {
        var createComment = function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        };
        
        return (
            <div className="commentList">
                { this.props.data.map(createComment) }
            </div>
        );
    }
});

module.exports = CommentList