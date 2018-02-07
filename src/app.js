import React from 'react';
import ReactDOM from 'react-dom';
import TabComponent from './components/TabComponent';
import ArticleComponent from './components/ArticleComponent';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const state = store.getState();

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

