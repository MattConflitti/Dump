import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const ImageButton = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <View style={styles.imageStyle}>{children}</View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 5,
        marginRight: 5
    },
    imageStyle: {
        alignSelf: 'center'
    }
});

export default ImageButton;