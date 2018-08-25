import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import thingReducer from './things.js';


export default createStore(thingReducer, applyMiddleware(thunk));