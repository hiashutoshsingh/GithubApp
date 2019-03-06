import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Text, TextInput, View,StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  static navigationOptions = {
    title: 'App',
  };


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Type the Github Username"
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableOpacity
         style={styles.button}
         onPress={() => navigate('Usergit')}
        >
         <Text>Search</Text>
       </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },container: {
    margin: 50,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
})
