import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import formValidate from './middleware/formValidate.js';

import thingReducer from './things.js';


export default createStore(thingReducer, applyMiddleware(thunk, formValidate));