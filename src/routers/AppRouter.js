import React from 'react';
import { Router, BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { TabComponentContainer } from '../components/TabComponent';
import { ArticleComponentContainer } from '../components/ArticleComponent';
import { AddArticleContainer } from '../components/AddArticle';
import { RemoveArticleContainer } from '../components/RemoveArticle';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const TabComponent = TabComponentContainer;
const ArticleComponent = ArticleComponentContainer;
const AddArticle = AddArticleContainer;
const RemoveArticle = RemoveArticleContainer;

const AppRouter = () => {
  return (
        <BrowserRouter history={history} basename={"/reddit-like-app"}>
                <div>
                        <div>
                                <Switch>
                                        <Route exact path="/" component={TabComponent} />
                                        <Route path="/article/:articleName" component={ArticleComponent} />
                                        <Route component={NotFoundPage} />
                                </Switch>
                        </div>
                        <div>
                                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                © 2018 CodeAstra India Pvt Ltd
                        </div>
                </div>
        </BrowserRouter>
);
}

export default AppRouter;