import React from 'react';
import { BrowserRouter, Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import TabComponent from '../components/TabComponent';

export const history = createHistory();

const testText1 = () => (<div><p>asdas1</p></div>);
const testText2 = () => (<div><p>asdas2</p></div>);
const testText3 = () => (<div><p>asdas3</p></div>);

const AppRouter = () => {
  console.log('HEREEE');
  
  return (
        <BrowserRouter history={history}>
                <div>
                        <Switch>
                                <Route exact path="/" component={testText1} />
                                <Route path="/new" component={() => <Redirect to='/index.html' push/>} /> 
                                {/* <Route path="/latest" component={testText3} /> */}
                        </Switch>
                </div>
        </BrowserRouter>
);
}

export default AppRouter;