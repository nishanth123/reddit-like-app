import { createStore } from 'redux';
import articleReducer from '../reducers/article';

let store = createStore(todoApp, window.STATE_FROM_SERVER)
