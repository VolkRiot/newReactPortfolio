import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {Main} from './components/Main';

class App extends React.Component {
  render() {
    return (
      <Main compiler='TypeScript'/>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

