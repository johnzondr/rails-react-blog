var React = require('react');
var ReactDOM = require('react-dom');
var CreateArticleContainer = require('./components/CreateArticleContainer.jsx');
var BasePage = require('./components/BasePage.jsx');


var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var ShowArticlePage = require('./components/ShowArticlePage.jsx');
var CreateArticlePage = require('./components/CreateArticlePage.jsx');




ReactDOM.render((
  <Router>
    <Route path="/" component={BasePage}>
    	<IndexRoute component={HomePage} />
    	<Route path="/articles/:articleId" component={ShowArticlePage} />
    	<Route path="/new" component={CreateArticlePage} />
    </Route>
  </Router>
), document.getElementById('app'));

// ReactDOM.render(<Routes />, document.getElementById('app'));
// ReactDOM.render(<CreateArticleContainer />, document.getElementById('app'));