import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Text, TextInput, View,StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.state ={ isLoading: true};
  }

  onPress = () => {
    fetch('https://api.github.com/users/ashutoshkumarsingh/repos')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){
      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Type the Github Username"
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>Search</Text>
       </TouchableOpacity>

       <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.name}, {item.id}</Text>}
          keyExtractor={({id}, index) => id}
        />
       
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
