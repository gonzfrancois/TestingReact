import { createStore, applyMiddleware } from 'redux';
import { RootReducer } from './rootReducer';
import thunk from 'redux-thunk';
var store = createStore(RootReducer, applyMiddleware(thunk));
store.subscribe(function () {
    console.log("Store a changé", store.getState());
});
export default store;
//# sourceMappingURL=store.js.map