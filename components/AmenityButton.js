import React from 'react';
import {
    Image,
    Linking,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TextInput,
    View
} from 'react-native';

export default class AmenityButton extends React.Component {
    state = {
        selected: false
    };

    styles = StyleSheet.create({
        buttonStyle: {
            flex: 1,
            alignSelf: 'stretch',
            borderRadius: 3,
            paddingTop: 10,
            paddingBottom: 10,
            marginLeft: 5,
            marginRight: 5
        },
        imageStyle: {
            alignSelf: 'center'
        },
        buttonStyleInitialColor: {
            backgroundColor: this.props.initialColor ? this.props.initialColor : '#1C75BC'
        },
        buttonStyleActiveColor: {
            backgroundColor: this.props.activeColor ? this.props.activeColor : '#134D7C'
        }
    });

    render() {
        return (
            <TouchableHighlight onPress={() => {this.setState({selected: !this.state.selected})}}
                              style={[this.styles.buttonStyle, this.state.selected ? this.styles.buttonStyleActiveColor : this.styles.buttonStyleInitialColor]}>
                <View style={this.styles.imageStyle}>{this.props.children}</View>
            </TouchableHighlight>
        );
    };
};