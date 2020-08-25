import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImagePick from './component/ImagePick';

export default class App extends Component {
  render() {
    return (
      <View>
        <ImagePick />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
