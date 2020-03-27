import React from 'react';
import Header from './components/Header/index';
import Router from './routes/Router';
import './styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
};

export default App;
