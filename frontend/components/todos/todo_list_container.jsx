import {connect} from 'react-redux';
import TodoList from './todo_list';
import {receiveTodo, receiveTodos} from '../../actions/todo_actions';

const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos)
  };
};

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: () => dispatch(receiveTodo())
});


const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
