import React, {Component} from 'react';

export default class InsertProps extends Component {
  state = {rell1: 'bekam'};
  render() {
    return (
      <div>
        <h1>{this.state.rell1}</h1>
        <h1>{this.props.jakipsy}</h1>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}
