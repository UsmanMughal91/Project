//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Home from './src/screens/Home'
import { store } from './store';

// create a component
const App = () => {
  return (
    // <View style={styles.container}>
    //  <Home/>
    // </View>
    <Provider store={store}>
      <Home/>
    </Provider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
