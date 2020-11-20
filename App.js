// In App.js in a new project
import * as React from 'react';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import { Store } from './src/store/index';

export default function App() {
  return (

    <Provider store={Store}>
        <Routes />
    </Provider>
      );
}