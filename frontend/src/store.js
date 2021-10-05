import { createStore } from 'redux';
// import rootReducer from './reducers';
import reducer from './reducer';
const store = createStore(reducer);
// export default (initialState) => {
//     return createStore(rootReducer, initialState);
// }
export default store;