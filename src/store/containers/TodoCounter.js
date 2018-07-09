import { connect } from 'react-redux';
import TodoTitle from '../../components/TodoTitle';
import { getTodos } from '../selectors';
var mapStateToProps = function (state) { return ({
    todoCounter: getTodos(state).filter(function (t) { return t.completed; }).length
}); };
var mapDispatchToProps = function (dispatch) { return ({}); };
var TodoListComponent = connect(mapStateToProps, mapDispatchToProps)(TodoTitle);
export default TodoListComponent;
//# sourceMappingURL=TodoCounter.js.map