const React = require('react');
const SideMenu = require('react-native-side-menu');
const Menu = require('./Menu');

const {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} = require('react-native');
const { Component } = React;

import Router from '../navigation/Router';
import ImageButton from './ImageButton';


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
        if(item != this.props.navigator.getCurrentRoute().routeName) {
            this.props.navigator.push(Router.getRoute(item));
        }
        this.setState({
            isOpen: false,
            selectedItem: item
        });
    };

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected.bind(this)} />;

        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>

                <View style={styles.header}>
                    <Button style={{alignSelf: 'center'}} onPress={() => this.toggle()}>
                        <Image
                            style={{flex: 1,
                                width: 30,
                                height:30,
                                resizeMode: 'contain',
                                marginTop: 10
                            }}
                            source={require('../assets/images/menu_icon_white.png')}
                        />
                    </Button>
                    <Text style={{alignSelf: 'center', fontSize: 20, color: 'white'}}>{this.props.title}</Text>
                    {this.props.navigator.getCurrentRoute().routeName == 'home' ? <Button>   </Button> : <Button onPress={() => {
                            this.props.navigator.pop();
                        }} style={{alignSelf: 'center'}}>
                            <Text style={{color:'white'}}>Back</Text>
                        </Button> }

                </View>

                {this.props.children}
            </SideMenu>
        );
    }
};

const styles = StyleSheet.create({
    header: {
        zIndex:99,
        flexDirection: 'row',
        backgroundColor: '#414141',
        justifyContent: 'space-between',
        height: 60,
        paddingTop: 15,
        paddingLeft: 5,
        paddingRight: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
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