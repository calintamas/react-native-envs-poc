import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { API_HOST } from './config'

export default class Root extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>{`API host is ${API_HOST}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
