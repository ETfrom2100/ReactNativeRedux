import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


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
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
