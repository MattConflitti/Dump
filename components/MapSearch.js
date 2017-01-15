import React from 'react';
import {
    Image,
    Linking,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View
} from 'react-native';

import ImageButton from './ImageButton';

export default class MapSearch extends React.Component {
    state = {
        search: ""
    };
    render() {
        return (
            <View style={styles.container}>
                <ImageButton style={{alignSelf:'flex-end'}}><Image
                    style={{flex: 1,
                        width: 30,
                        height:30,
                        marginTop: 5,
                        marginBottom: 5,
                        resizeMode: 'contain',
                        alignSelf: 'center'}}
                    source={require('../assets/images/filter_icon.png')}
                /></ImageButton>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(search) => this.setState({search})}
                    value={this.state.search}
                    placeholder="Search"
                    underlineColorAndroid={'transparent'}
                />
                <ImageButton style={{alignSelf:'flex-end'}}><Image
                    style={{flex: 1,
                        width: 30,
                        height:30,
                        marginTop: 5,
                        marginBottom: 5,
                        resizeMode: 'contain',
                        alignSelf: 'center'}}
                    source={require('../assets/images/search_icon.png')}
                /></ImageButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex: 99,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 7,
        position:'absolute',
        justifyContent: 'center'
    },
    textInput: {
        textAlign: 'center',
        color: '#999999',
        height: 40,
        padding: 5,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        flex: 2.5,
        justifyContent: 'center',
        alignSelf: 'stretch',
    }
});