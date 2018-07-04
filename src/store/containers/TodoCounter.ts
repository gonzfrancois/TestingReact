import { connect } from 'react-redux'
import { State } from "../rootReducer"
import TodoTitle, {DispatchProps, StateProps} from '../../components/TodoTitle'
import { getTodos } from '../selectors';
import { Dispatch } from 'redux';


const mapStateToProps = (state: State): StateProps => ({
    todoCounter: getTodos(state).filter(t => t.completed).length
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({

});

const TodoListComponent = connect(mapStateToProps, mapDispatchToProps)(TodoTitle)

export default TodoListComponent