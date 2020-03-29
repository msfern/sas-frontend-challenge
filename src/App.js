import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import Header from './components/Header/index';
import Router from './routes/Router';
import Api from './services/Api';
import './styles/App.scss';

const App = (props) => {
  const [report, setReport] = useState({}); // Todos os resultados até agora
  const [currentCategory, setCurrentCategory] = useState(''); // Categoria sendo realizada no momento
  const [currentCategoryId, setCurrentCategoryId] = useState(''); // Categoria sendo realizada no momento
  const [questions, setQuestions] = useState({}); // Perguntas da categoria selecionada
  const [categories, setCategories] = useState({}); // Todas as categorias da API
  const [url, setUrl] = useState('');

  useEffect(() => {
    async function loadAPI() {
      const response = await Api();
      setUrl(response);
    }
    loadAPI();
  }, []);

  useEffect(() => {
    async function loadCategories() {
      const response = await axios.get('https://opentdb.com/api_category.php');
      setCategories(response.data.trivia_categories);
    }
    loadCategories();
  }, []);

  const checkIfCategoryHasBeenCompleted = (categoryId) => {
    if (report[categoryId]) {
      return true;
    }
    return false;
  };

  const loadQuestions = async (name, categoryId) => {
    const easyQuestions = await axios.get(
      `${url}&amount=10&category=${categoryId}&difficulty=easy&type=multiple`
    );
    const mediumQuestions = await axios.get(
      `${url}&amount=10&category=${categoryId}&difficulty=medium&type=multiple`
    );
    const hardQuestions = await axios.get(
      `${url}&amount=10&category=${categoryId}&difficulty=hard&type=multiple`
    );
    setQuestions({
      easy: easyQuestions.data.results,
      medium: mediumQuestions.data.results,
      hard: hardQuestions.data.results,
    });
    setReport({ ...report, [categoryId]: { name } });
    setCurrentCategoryId(categoryId);
  };

  const goToCategory = (name, categoryId) => {
    if (checkIfCategoryHasBeenCompleted(categoryId)) {
      props.history.push(`/category/${name}/result`);
    } else {
      loadQuestions(name, categoryId);
      setCurrentCategory(name);
      props.history.push(`/category/${name}`);
    }
  };

  const addCategoryResultsToReport = (categoryReport) => {
    setReport({ ...report, [currentCategoryId]: categoryReport });
  };

  const clearQuestions = () => {
    setQuestions({});
  };

  const quitQuiz = () => {
    const copyReport = { ...report };
    delete copyReport[currentCategoryId];
    setReport(copyReport);
    clearQuestions();
  };

  return (
    <div className="App">
      <Header />
      <Router
        categories={categories}
        goToCategory={goToCategory}
        questions={questions}
        currentCategory={currentCategory}
        currentCategoryId={currentCategoryId}
        clearQuestions={clearQuestions}
        addCategoryResultsToReport={addCategoryResultsToReport}
        quitQuiz={quitQuiz}
        report={report}
      />
    </div>
  );
};

export default withRouter(App);
