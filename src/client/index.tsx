import * as React from 'react'
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World and the webpack dev server and new friend TypeScript!
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

