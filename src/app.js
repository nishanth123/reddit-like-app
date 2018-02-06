import React from 'react';
import ReactDOM from 'react-dom';
import TabComponent from './components/TabComponent';
import ArticleComponent from './components/ArticleComponent';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));

