import React from 'react';
import { Router, BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { TabComponentContainer } from '../components/TabComponent';
import { ArticleComponentContainer } from '../components/ArticleComponent';
import { AddArticleContainer } from '../components/AddArticle';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const TabComponent = TabComponentContainer;
const ArticleComponent = ArticleComponentContainer;
const AddArticle = AddArticleContainer;

const AppRouter = () => {
  return (
        <BrowserRouter history={history} basename={"/reddit-like-app"}>
                <div>
                        <Switch>
                                <Route exact path="/" component={TabComponent} />
                                <Route path="/article/:articleName" component={ArticleComponent} />
                                <Route component={NotFoundPage} />
                        </Switch>
                </div>
        </BrowserRouter>
);
}

export default AppRouter;