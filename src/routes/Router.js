import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Categories from '../pages/Categories/index';
import Question from '../pages/Question/index';
import Result from '../pages/Result/index';
import NotFound from '../pages/NotFound/index';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Categories} />
      <Route path="/category/:categoryName/result" component={Result} />
      <Route path="/category/:categoryName" component={Question} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
