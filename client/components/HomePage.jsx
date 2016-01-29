var React = require('react');
var ReactRouter = require('react-router');
var NewsFeedContainer = require('./newsfeed/NewsFeedContainer.jsx');

var articles = [
  {id: 1, author: "Pete Hunt", content: "This is one comment", title:"a title"},
  {id: 2, author: "Jordan Walke", content: "This is *another* comment", title: "a title"}
];

var HomePage = React.createClass({
	
	render: function() {
		return (
			<div>
				<h1>Welcome to my Rails React blog</h1>
				<NewsFeedContainer articles={articles}/>
			</div>
		);

	}
});


module.exports = HomePage;