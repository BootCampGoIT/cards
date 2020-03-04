import React from 'react';
import Cards from './cards/Cards';
import css from './App.module.css';
import Header from './header/Header';


const App = () => {
  return (
    <div className={css.App}>
      <Header />
      <Cards />
    </div>
  );
}

export default App;
