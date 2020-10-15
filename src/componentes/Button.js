import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    button: {
        fontSize: 30,
        height: Dimensions.get('window').width / 5,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    functionButton:{
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    doubleButton:{
        width: Dimensions.get('window').width / 4 * 2,
    }
})

export default props => {
    const stylesButton = [styles.button]
    if(props.function) stylesButton.push(styles.functionButton)
    if(props.double) stylesButton.push(styles.doubleButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}