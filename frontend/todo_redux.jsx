import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';

//Testing purposes
import { getAllTodos } from './reducers/selectors';
window.store = configureStore();
window.getAllTodos = getAllTodos;

// window.store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
});
