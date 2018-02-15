import { createStore } from 'redux';
import { articleApp } from './reducers';

let store = createStore(articleApp, window.STATE_FROM_SERVER)
