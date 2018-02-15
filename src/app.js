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

let store = createStore(articleApp);

render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById('app')
)

