import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: false };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC_KjqTk7o5RiZ9L4aVii0l5MGF7KjB4uE',
      authDomain: 'authentication-7ab41.firebaseapp.com',
      databaseURL: 'https://authentication-7ab41.firebaseio.com',
      projectId: 'authentication-7ab41',
      storageBucket: 'authentication-7ab41.appspot.com',
      messagingSenderId: '709029535402'
    });

    firebase.auth().onAuthStateChanged((user) => {
       if (user) {
         this.setState({ loggedIn: true });
       } else {
         this.setState({ loggedIn: false });
       }
    });
  }
  onButtonPressed() {
    console.log('clicked');
  }
  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button title="Log Out" onPress={this.onButtonPressed.bind(this)} />
      );
    }

    return <LoginForm />;
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
