import { createStore } from 'redux';
import { articleApp } from './reducers';

console.log('test1');
let store = createStore(articleApp, window.STATE_FROM_SERVER)
