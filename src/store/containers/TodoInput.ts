import { connect } from 'react-redux'
import { State } from "../../app/rootReducer"
import { addTodo } from '../../actions/index'
import TodoInput, {DispatchProps, StateProps} from '../../components/todoInput'
import { Dispatch } from 'redux';


const mapStateToProps = (state: State): StateProps => ({

});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    onSubmit: (title: string) => dispatch(addTodo(title))
});

const TodoInputComponent = connect(mapStateToProps, mapDispatchToProps)(TodoInput)

export default TodoInputComponent