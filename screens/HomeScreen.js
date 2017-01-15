import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MenuDrawer from '../components/MenuDrawer';
import MapView from 'react-native-maps';
import MapSearch from '../components/MapSearch';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markers: [
                {
                    latlng: {
                        latitude: 37.78825,
                        longitude: -122.4324
                    },
                    title: "Haitham",
                    description: "123 Main St San Francisco, CA"
                }
            ],
            showFooter: false
        };
    }
    static route = {
        navigationBar: {
            visible:false,
        },
    };

    onRegionChange(region) {
        this.setState({ region });
    }

    onMarkerPress() {
        this.setState({ showFooter: true });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

  render() {
      var update = function() {
          if (this.state.showFooter) {
              return (<View style={styles.footer}>
                  {/*<View style={styles.circle}></View>*/}
                  <Text>Footer</Text>
              </View>);
          } else {
              return null; // or something like (<Text>Some other view</Text>)
          }
      }.bind(this);
    return (
    <MenuDrawer navigator={this.props.navigator} title="Find a Spot">
      <View style={styles.container} contentContainerStyle={styles.contentContainer}>
        <MapSearch style={{zIndex:99}} />
        <MapView
            style={styles.map}
            initialRegion={this.state.region}
            onRegionChange={this.onRegionChange.bind(this)}
            onMarkerPress={this.onMarkerPress.bind(this)}
        >
            {this.state.markers.map(marker => (
                <MapView.Marker
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                    image={require('../assets/images/pin.png')}
                    key={marker.title}
                />
            ))}
        </MapView>
      </View>
        {update()}
    </MenuDrawer>

    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will run slightly slower but
          you have access to useful development tools. {learnMoreButton}.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    Linking.openURL('https://docs.getexponent.com/versions/latest/guides/development-mode');
  }

  _handleHelpPress = () => {
    Linking.openURL('https://docs.getexponent.com/versions/latest/guides/up-and-running.html#can-t-see-your-changes');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 80,
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
        height: 150,
        bottom: 0,
        backgroundColor: '#fff'
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
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
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
