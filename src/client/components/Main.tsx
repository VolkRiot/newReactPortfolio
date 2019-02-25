import * as React from 'react'

export interface MainProps { compiler: string; }

// State is never set so we use the '{}' type.
// Cover the types for both props and state.
export class Main extends React.Component<MainProps, {}> {
  render() {
    return <h1>This app is compiled with {this.props.compiler}</h1>
  }
}