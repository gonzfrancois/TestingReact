import { connect } from 'react-redux';
import { addTodo } from '../../actions/index';
import TodoInput from '../../components/todoInput';
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch) { return ({
    onSubmit: function (title) { return dispatch(addTodo(title)); }
}); };
var TodoInputComponent = connect(mapStateToProps, mapDispatchToProps)(TodoInput);
export default TodoInputComponent;
//# sourceMappingURL=TodoInput.js.map