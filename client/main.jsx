var React = require('react');
var ReactDOM = require('react-dom');

// module.exports = React.createClass({
//   render: function () {
//     return (
//       <h1>Hello world!</h1>
//     );
//   }
// });

var Hi = React.createClass({
	render: function() {
		return (
			<h1> Hello World! </h1>	
		)
	}
});

module.exports = Hi;

ReactDOM.render(<Hi />, document.getElementById('app'));