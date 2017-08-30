import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyByYWYIuYdfvtFSSnGIXvxFsJtbdKhlx_c',
      authDomain: 'manager-588aa.firebaseapp.com',
      databaseURL: 'https://manager-588aa.firebaseio.com',
      projectId: 'manager-588aa',
      storageBucket: 'manager-588aa.appspot.com',
      messagingSenderId: '464900733030'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
