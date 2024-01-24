import { createStore, applyMiddleware } from 'redux';
import { thunk as thunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer)
export default store