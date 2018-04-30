import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './todos/todo_list_container';

export default class App extends React.Component {
  render(){
    return (
      <TodoListContainer />
    );
  }
}
