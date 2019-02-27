import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

const Generate = () =>(

    <TouchableWithoutFeedback
        onPress={() => alert('You touched it')}
    >
        <View style={styles.generate}>
            <Text>Add Number</Text>
        </View>
    </TouchableWithoutFeedback>
    
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