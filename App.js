import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Nav from './src/nav/nav';

class App extends Component {

state = {
  nameOfApp: "My First Application"
}

  render() {
    return (
      <View style={styles.container}>

          <Nav nameOfApp={this.state.nameOfApp}/>
                  
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20,
  }, 
});
