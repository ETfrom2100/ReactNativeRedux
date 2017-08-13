//Index.ios.js -place code in here for IOS!!!

//Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a Component
const App = () => (
  <View style={{ flex: 1 /*expand the component to fill up the entire area*/}}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
