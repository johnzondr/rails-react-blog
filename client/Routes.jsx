var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
// var IndexRoute = ReactRouter.IndexRoute;
			// <IndexRoute component={HomePage} />
			// <Route path="/article/:articleId" component={ShowArticlePage} />

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var ShowArticlePage = require('./components/ShowArticlePage.jsx');
var CreateArticlePage = require('./components/CreateArticlePage.jsx');

var Routes = (
	<Router>
		<Route path="/" component={BasePage}>
		</Route>
	</Router>
);

module.exports = Routes;