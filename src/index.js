import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import { Provider } from 'react-redux'



const reflectionList = (state = [], action) => {
    switch (action.type) {
      case 'GET_REFLECTIONS':
        return action.payload
      default:
        return state;
    }
  };

const store = createStore(
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
