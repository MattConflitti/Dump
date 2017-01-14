const React = require('react');
const SideMenu = require('react-native-side-menu');
const Menu = require('./Menu');

const {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} = require('react-native');
const { Component } = React;

import {
    StackNavigation,
    TabNavigation,
    TabNavigationItem,
} from '@exponent/ex-navigation';
import {
    FontAwesome,
} from '@exponent/vector-icons';
import Router from '../navigation/Router';

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 20,
        padding: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

class Button extends Component {
    handlePress(e) {
        if (this.props.onPress) {
            this.props.onPress(e);
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.handlePress.bind(this)}
                style={this.props.style}>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

export default class MenuDrawer extends Component {
    state = {
        isOpen: false,
        selectedItem: 'home'
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen, });
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item
        });
        this.props.navigator.push(Router.getRoute(item));
    }

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected.bind(this)} />;

        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>

                {this.props.children}
                {/*<StackNavigation initialRoute={this.state.selectedItem} />*/}

                <Button style={styles.button} onPress={() => this.toggle()}>
                    Menu
                </Button>
            </SideMenu>
        );
    }
};