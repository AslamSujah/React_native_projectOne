import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Generate = () =>(
    <View style={styles.generate}>
        <Text>Add Number</Text>
    </View>
)

const styles = StyleSheet.create({
    generate: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#00bcd4',
        width: '100%',
        margin: 20,
    }
});

export default Generate;