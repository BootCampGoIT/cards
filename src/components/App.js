import React from 'react';
import Cards from './cards/Cards';
import css from './App.module.css';
import Header from './header/Header';
import data from './Data';


const App = () => {
  return (
    <div className={css.App}>
      <Header />
      <Cards data={data} />
    </div>
  );
}

export default App;
