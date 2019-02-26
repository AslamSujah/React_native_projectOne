import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { gray } from 'ansi-colors';

const Nav = (props) => (
    <View style={styles.nav}>
        <Text>{props.nameOfApp}</Text>
    </View>
)

export default Nav;

const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#dddddd',
    }
});