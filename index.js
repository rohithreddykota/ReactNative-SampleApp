// import the react modules
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create react Component

const App = () => (
  <View style={{ flex: 1 }} >
    <Header headerText={'albums'} />
    <AlbumList />
  </View>
);
// render the react Component to the mobile node

AppRegistry.registerComponent('albums', () => App);
