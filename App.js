/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        
          <View style={{backgroundColor:'blue', width:'100%'}}>
            <Text style={styles.text123}>Text for view 1</Text>
          </View>

          <View style={{backgroundColor:'yellow', width:'100%'}}>
            <Text>Text for view 2</Text>
          </View>

          <View style={{backgroundColor:'green'}}>
            <Text style={styles.text123}>Text for view 3</Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    marginTop: 40,
  },

  text123: {
    fontSize: 25,
    fontWeight: 'bold',
  }
  
});
