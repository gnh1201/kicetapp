import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://www.ceramicsbank.com/ceramic_new/search/main/main.do'}}
        style={{marginTop: 20}}
      />
    );
  }
}

