import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Text, TextInput, View,StyleSheet } from 'react-native';

export default class Gists extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.state ={ isLoading: true};
  }

  componentDidMount (){
    return fetch('https://api.github.com/users/ashutoshkumarsingh/events')
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
        
       <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.id}, {item.type}</Text>}
          keyExtractor={({id}, index) => id}
        />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    margin: 50,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
})