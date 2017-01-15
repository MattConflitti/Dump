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

import MenuDrawer from '../components/MenuDrawer';
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';
import TabPage from '../components/TabPage';
import Router from '../navigation/Router';

export default class ManageSpotsScreen extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: '1', title: 'Reserved' },
            { key: '2', title: 'Listed' },
        ]
    };

    _handleChangeTab = (index) => {
        this.setState({ index });
    };

    _renderHeader = (props) => {
        return <TabBarTop {...props} />;
    };

    reservedData = [
        {title: "2206 Pine St, San Francisco, CA 94115"},
        {title: "123 Main St, San Francisco, CA 94115"}
    ];

    listedData = [
        {title: "123 Picnic Rd Los Angeles, CA 90210"}
    ];

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return <TabPage
                    navigator={this.props.navigator}
                    listData={this.reservedData}
                    actionMethod={() => {
                        this.props.navigator.push(Router.getRoute('home'));
                    }}
                />;
            case '2':
                return <TabPage
                    navigator={this.props.navigator}
                    listData={this.listedData}
                    actionMethod={() => {
                        this.props.navigator.push(Router.getRoute('listASpot'));
                    }}
                />;
            default:
                return null;
        }
    };

    static route = {
        navigationBar: {
            visible:false,
        },
    };

    fabOnClickReserve() {
        this.props.navigator.push(Router.getRoute('home'));
    }
    fabOnClickList() {
        this.props.navigator.push(Router.getRoute('listASpot'));
    }

    render() {
        return (
            <MenuDrawer navigator={this.props.navigator} title="Manage Spots">
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />
                <TouchableWithoutFeedback
                    onPress={this.state.index == '0' ? this.fabOnClickReserve.bind(this) : this.fabOnClickList.bind(this) }

                >
                    <View style={styles.fab}>
                        <Image
                            style={{
                                flex: 1,
                                resizeMode: 'contain',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                height: 40,
                                width: 40
                            }}
                            source={require('../assets/images/add_white.png')}
                        />
                    </View>

                </TouchableWithoutFeedback>
            </MenuDrawer>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#414141',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
    },
    contentContainer: {
        paddingTop: 80,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fab: {
        backgroundColor: '#1c75bc',
        height: 75,
        width: 75,
        borderRadius: 37.5,
        position: 'absolute',
        bottom: 35,
        right: 20,
        flex: 1
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 200,
        height: 34.5,
        marginTop: 3,
    },
    footer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        flex: 1,
        height: 150,
        backgroundColor: '#ffffff',
        zIndex: 9999
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 23,
        textAlign: 'center',
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
