import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Router from '../navigation/Router';

class SplashScreen extends Component {
    componentWillMount () {
        let navigator = this.props.navigator;
        setTimeout (() => {
            navigator.replace(Router.getRoute('listing'));
        }, 0);
    }

    render () {
        return (
            <View style={{flex: 1, backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    style={{flex: 1,
                        width: 200,
                        height: 50,
                        resizeMode: 'contain'}}
                    source={require('../assets/images/logo.png')}
                />
            </View>
        );
    }
}

export default SplashScreen;