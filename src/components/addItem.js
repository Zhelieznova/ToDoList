import React from 'react';
import '../css/addItem.css';

export default class AddItem extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
    this.refs.newItem.value = '';
  };

  render() {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem" />
        <input type="submit"  value="Hit me"/>
      </form>
    );
  }
}