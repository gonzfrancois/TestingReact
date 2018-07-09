import { connect } from 'react-redux';
import { toggleTodo } from '../../actions';
import TodoList from '../../components/todoList';
import { getTodos } from '../selectors';
var mapStateToProps = function (state) { return ({
    todos: getTodos(state)
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onToggle: function (id) { return dispatch(toggleTodo(id)); }
}); };
var TodoListComponent = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListComponent;
//# sourceMappingURL=TodoList.js.map