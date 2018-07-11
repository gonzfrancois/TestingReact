import { createStore, applyMiddleware } from 'redux'
import { RootReducer } from './rootReducer'
import thunk from 'redux-thunk';

const store = createStore(
    RootReducer,
    applyMiddleware(thunk)
)

store.subscribe(()=> {
    console.log("Store a changé", store.getState())
})

export default store