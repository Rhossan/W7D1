import React from 'react';
import TodoItem from './todo_item'

const TodoList = ({todos}) => {
  const todoItems = todos.map((todo, idx) => (
    <TodoItem key={idx} todo={todo} />
  ))

  return (
		<div className="todo-list">
			<ul className='todo-items'>
				{todoItems}
			</ul>
		</div>
	);
};

export default TodoList;
