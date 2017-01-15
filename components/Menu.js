const React = require('react');
const {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
} = require('react-native');
const { Component } = React;

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: '#f8f8f8'
    },
    avatarContainer: {
        marginTop: 20,
        padding:20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    name: {
        position: 'absolute',
        left: 80,
        top: 30,
        fontSize: 25
    },
    item: {
        fontSize: 20,
        fontWeight: '300',
        paddingLeft: 20,

    },
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingTop: 10,
        paddingBottom: 10
    }
});

module.exports = class Menu extends Component {
    static propTypes = {
        onItemSelected: React.PropTypes.func.isRequired,
    };

    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri, }}/>
                    <Text style={styles.name}>John Smith</Text>
                </View>

                <View style={styles.itemContainer}>
                    <Text
                        onPress={() => this.props.onItemSelected('home')}
                        style={styles.item}>
                        Find A Spot
                    </Text>
                </View>

                <View  style={styles.itemContainer}>
                    <Text
                        onPress={() => this.props.onItemSelected('listASpot')}
                        style={styles.item}>
                        List a Spot
                    </Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text
                        onPress={() => this.props.onItemSelected('home')}
                        style={styles.item}>
                        Manage Spots
                    </Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text
                        onPress={() => this.props.onItemSelected('home')}
                        style={styles.item}>
                        Settings
                    </Text>
                </View>
            </ScrollView>
        );
    }
};