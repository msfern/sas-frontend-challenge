import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from '../pages/Categories/index';
import Question from '../pages/Question/index';
import Result from '../pages/Result/index';
import NotFound from '../pages/NotFound/index';

const Router = (props) => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <Categories
          categories={props.categories}
          goToCategory={props.goToCategory}
        />
      )}
    />
    <Route
      path="/category/:categoryName/result"
      render={() => (
        <Result
          clearQuestions={props.clearQuestions}
          report={props.report}
          currentCategoryId={props.currentCategoryId}
        />
      )}
    />
    <Route
      path="/category/:categoryName"
      render={() => (
        <Question
          questions={props.questions}
          currentCategory={props.currentCategory}
          clearQuestions={props.clearQuestions}
          addCategoryResultsToReport={props.addCategoryResultsToReport}
          quitQuiz={props.quitQuiz}
        />
      )}
    />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
