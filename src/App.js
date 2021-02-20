import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Router from './router';
// import InputMenu from '../src/pages/InputMenu'
import { NavigationContainer } from '@react-navigation/native';
// import CRUD from './CRUD';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
