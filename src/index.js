import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App';
import bookReducer from './reducers/bookReducer';

import reportWebVitals from './reportWebVitals';


// create redux store 
const store = createStore(bookReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
