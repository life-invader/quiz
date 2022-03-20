import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import './index.scss';

import { QUESTIONS } from './data'
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App questions={QUESTIONS} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
