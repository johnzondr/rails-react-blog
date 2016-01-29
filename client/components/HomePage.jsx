var React = require('react');
var ReactRouter = require('react-router');
var NewsFeedContainer = require('./newsfeed/NewsFeedContainer.jsx');

// var articles = [
//   {id: 1, author: "Pete Hunt", content: "This is one comment", title:"a title"},
//   {id: 2, author: "Jordan Walke", content: "This is *another* comment", title: "a title"}
// ];

var HomePage = React.createClass({
	getInitialState: function(){
		return {articles:[]};
	},
	  componentDidMount: function() {
	    $.ajax({
	      url: '/articles',
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({articles: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	render: function() {
		return (
			<div>
				<h1>Welcome to my Rails React blog</h1>
				<NewsFeedContainer articles={this.state.articles}/>
			</div>
		);

	}
});


module.exports = HomePage;