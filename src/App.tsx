import React from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// react-toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Properties from './pages/Properties';
import Login from './pages/Login';

import store from './store';
import history from './services/history';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Suspense fallback={() => null}>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/"
              render={(props: any) => <Login {...props} />}
            />
            <Route
              exact
              path="/propriedades"
              render={(props: any) => <Properties {...props} />}
            />
          </Switch>
          <ToastContainer autoClose={3000} position="top-center" />
        </Router>
      </React.Suspense>
    </BrowserRouter>
  </Provider>
);

export default App;
