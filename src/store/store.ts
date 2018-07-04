import { createStore } from 'redux'
import { reducer as TodoReducer } from '../shared/reducers'

const store = createStore(TodoReducer)
store.subscribe(()=> {
    console.log("Store à changer", store.getState())
})

export default store