import { connect } from 'react-redux'
import { State } from "../rootReducer"
import { toggleTodo } from '../../actions'
import TodoList, {DispatchProps, StateProps} from '../../components/todoList'
import { getTodos } from '../selectors';
import { Dispatch } from 'redux';


const mapStateToProps = (state: State): StateProps => ({
    todos: getTodos(state)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    onToggle: (id: number) => dispatch(toggleTodo(id))
});

const TodoListComponent = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListComponent