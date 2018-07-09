import { createStore } from 'redux'
import { reducer } from './rootReducer'

const store = createStore(reducer)

store.subscribe(()=> {
    console.log("Store a changer", store.getState())
})

export default store