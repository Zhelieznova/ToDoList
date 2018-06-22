import React from 'react';

export default class ButtonLan extends React.Component {

  handleclick = () => {

  };

  render() {
    return <button onClick={this.handleClick}>{this.props.lang}</button>
  }
}