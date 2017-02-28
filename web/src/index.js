import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const Application = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Application />
  </Provider>
  , document.querySelector('.container'));
