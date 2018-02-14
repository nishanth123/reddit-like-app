import React from 'react';
import { render } from 'react-dom';
import TabComponent from './components/TabComponent';
import ArticleComponent from './components/ArticleComponent';
import AppRouter from './routers/AppRouter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  articleApp  from './reducers';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('test3');
let store = createStore(articleApp);

console.log(store.getState());
console.log('test6');

render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById('app')
)

console.log('test7');

