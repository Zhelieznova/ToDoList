import React from 'react';
import '../css/toDoItem.css';

export default class ToDoItem extends React.Component {
  handleDelete = () => {
    this.props.onDelete(this.props.item);
  };

  render() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-remove" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  }
}