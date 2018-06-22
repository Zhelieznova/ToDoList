import React, { Component } from 'react';
//import { Router, Route } from 'react-router';
import '../css/app.css';
import ToDoItem from '../components/ToDoItem';
import AddItem from '../components/addItem';
//import About from '../components/About';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['wash', 'eat', 'take', 'drink'],
    }
  }

  handleDelete = (item) => {
    let updatedTodos = this.state.todos.filter((val, index) => {
      return item !== val;
    });
    console.log(updatedTodos);
    this.setState({
      todos: updatedTodos,
    });
  };
  handleAdd = (item) => {
    let addItem = this.state.todos;
    addItem.push(item);
    this.setState({
      todos: addItem,
    });
  };

  //lifecycle funcs

  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  render() {
    let todos = this.state.todos;
    todos = todos.map((item, index) => {
      return (
        <ToDoItem item={item} key={index} onDelete={this.handleDelete}/>
      );
    });

    return (
      <div id="todo-list">
        <p>Do smth</p>
        <ul>
          {todos}
        </ul>
        <AddItem onAdd={this.handleAdd} />
      </div>
        );
  }
}

export default App;
