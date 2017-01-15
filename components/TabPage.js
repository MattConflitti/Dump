import React from 'react';
import {
    Image,
    Linking,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';

import Router from '../navigation/Router';

export default class ManageSpotsScreen extends React.Component {
    state = {};

    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#414141',
            flexDirection: 'column'
        },
        contentContainer: {
            paddingTop: 80,
        },
        page: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        item: {
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            padding: 20,

        },
        title: {
            fontSize: 18,
            color:'white'
        },

    });

    static route = {
        navigationBar: {
            visible:false,
        },
    };

    render() {
        return (
            <View style={this.styles.container}>
                {this.props.listData.map((item) => {
                    return (
                        <TouchableWithoutFeedback onPress={() => {
                            this.props.navigator.push(Router.getRoute('listing'));
                        }}
                                                  key={item.title}
                        >
                            <View style={this.styles.item}>
                                <Text style={this.styles.title}>{item.title}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </View>

        );
    }
}
