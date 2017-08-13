import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC_KjqTk7o5RiZ9L4aVii0l5MGF7KjB4uE',
      authDomain: 'authentication-7ab41.firebaseapp.com',
      databaseURL: 'https://authentication-7ab41.firebaseio.com',
      projectId: 'authentication-7ab41',
      storageBucket: 'authentication-7ab41.appspot.com',
      messagingSenderId: '709029535402'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
