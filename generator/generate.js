import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

const Generate = (props) =>(

    <TouchableWithoutFeedback
        onPress={() => 
            props.add()
        }
        //onLongPress={() => alert('You long press it')}
        //onPressIn={() => alert('onpress in')}
        //onPressOut={() => alert('onpress out')}
        //delayLongPress={5000}
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