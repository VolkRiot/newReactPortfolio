const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World and the webpack dev server!
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

