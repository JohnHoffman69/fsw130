import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MoviesContextProvider } from './moviesContext';

ReactDOM.render(
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>,
  document.getElementById('root')
);