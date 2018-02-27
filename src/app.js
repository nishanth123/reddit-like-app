import React from 'react';
import { render } from 'react-dom';
import TabComponent from './components/TabComponent';
import ArticleComponent from './components/ArticleComponent';
import AppRouter from './routers/AppRouter';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer, autoRehydrate } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'

import  articleApp  from './reducers';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { logger } from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, articleApp)

let store = createStore(articleApp, applyMiddleware(logger));
let persistor = persistStore(store)

render(
    <Provider store={store}>
      <PersistGate loading={<TabComponent />} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>,
    document.getElementById('app')
)
