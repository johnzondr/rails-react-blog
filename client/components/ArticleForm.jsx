var React = require('react');

var ArticleForm = React.createClass({
	getInitialState: function() {
		return {author:'',title:'', content: ''};
	},
	onTitleChange: function(e){
		this.setState({title: e.target.value});
	},
	onAuthorChange: function(e){
		this.setState({author: e.target.value});
	},
	onContentChange: function(e){
		this.setState({content: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var title = this.state.title.trim();
		var author = this.state.author.trim();
		var content = this.state.content.trim();

		console.log('submitting');
		$.ajax({
			url: 'articles',
			dataType: 'json',
			type: 'POST',
			data: {title: title, author: author, content: content},
			success: function(data) {
				console.log('success!')
			}.bind(this),
			error: function(xhr,status, err) {
				console.log('error');
			}.bind(this)

		});
		//todo send request to the server

	},
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter a title" onChange={this.onTitleChange} value={this.state.title}/>
                <input type="text" placeholder="Your name" onChange={this.onAuthorChange} value={this.state.author}/>
                <input type="text" onChange={this.onContentChange} value={this.state.content}/>
                <input type="submit" value="Post" />
            </form>
        );
    }
});

module.exports = ArticleForm;