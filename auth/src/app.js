import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };
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

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
          return (
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
              Log Out
              </Button>
            </CardSection>

          );
      case false:
          return <LoginForm />;
      default:
          return <Spinner size="large" />;
    }
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
