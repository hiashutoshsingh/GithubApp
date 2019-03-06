import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';

export default class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Repos",
      bodyText: 'r'
    };
  }

  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
        </Text>
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
