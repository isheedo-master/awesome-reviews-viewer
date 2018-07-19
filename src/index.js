import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './components/containers/App';

const store = compose(applyMiddleware(thunk))(createStore)(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
