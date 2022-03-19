import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.scss';

import { QUESTIONS } from './data'

ReactDOM.render(
  <React.StrictMode>
    <App questions={QUESTIONS} />
  </React.StrictMode>,
  document.getElementById('root')
);
