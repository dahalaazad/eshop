/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {persistor, store} from '@app/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import React from 'react';
import {setupInterceptor} from '@app/utils/api';

setupInterceptor(store);

function Root() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Root);
