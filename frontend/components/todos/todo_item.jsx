import React from 'react';

const Todo = ({ todo }) => (
	<div className="list-todo">
		<h3>
			{todo.title}
		</h3>
		<span>
			{todo.body}
      {todo.done}
		</span>
	</div>
);

export default Todo;
