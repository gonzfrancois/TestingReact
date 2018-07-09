import { createStore } from 'redux';
import { reducer } from './rootReducer';
var store = createStore(reducer);
store.subscribe(function () {
    console.log("Store a changer", store.getState());
});
export default store;
//# sourceMappingURL=store.js.map