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
import { Ionicons } from '@exponent/vector-icons';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible:false,
    },
  }

  render() {
    return (
        <MenuDrawer navigator={this.props.navigator} style={{flex: 1}} title="Reserve a Spot">
          <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
              <View className="spot-image" style={styles.container}>
                <Image style={{
                   flex: 1,
                   resizeMode: 'cover',
                   alignSelf: 'center',
                   justifyContent: 'center',
                   height: 200
                   }}
                       source={require('../assets/images/spot-image.jpg')}
                />
              </View>
              <View style={styles.container}>
                <Image style={{
                   flex: 1,
                   resizeMode: 'cover',
                   alignSelf: 'center',
                   justifyContent: 'center',
                   height: 100,
                   width: 100,
                   borderRadius: 50,
                   borderColor: '#ffffff',
                   borderWidth: 2,
                   position: 'absolute',
                   top: -50,
                   left: 20
                   }}
                       source={require('../assets/images/hmaya.jpeg')}
                />
              </View>
              <TouchableOpacity onPress={() => {
                  Linking.openURL(
                        'https://www.google.com/maps/dir/37.78825,+-122.4324/Alta+Plaza+Park/@37.7892357,-122.4380429,17z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d-122.4324!2d37.78825!1m5!1m1!1s0x0:0xffb0154102337e61!2m2!1d-122.4376241!2d37.7911417!3e0'
                  )
              }}
                                style={{
                   backgroundColor: '#3cba54',
                   height: 50,
                   width: 50,
                   borderRadius: 25,
                   position: 'absolute',
                   top: 175,
                   right: 20,
                   borderColor: '#ffffff',
                   borderWidth: 2,
                   flex: 1
                }}>
                <Image style={{
                   flex: 1,
                   resizeMode: 'contain',
                   alignSelf: 'center',
                   justifyContent: 'center',
                   height: 30,
                   width: 30
                   }}
                       source={require('../assets/images/car_icon.png')}
                />
              </TouchableOpacity>
              <View style={{
              marginTop: 50,
              flex: 1,
              padding: 10,
              left: 0,
              right: 0,
              alignSelf: 'stretch'
              }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text style={{fontSize: 18, color:'white'}}>Heritage Hill Single Parking Space</Text>
                  </View>
                  <View style={{flex: 2}}>
                    <Text style={{flex: 1, color:'white'}}>$4.00 <Text style={{fontSize: 10, color:'white'}}>hourly</Text></Text>
                    <Text style={{flex: 1, color:'white'}}>$15.00 <Text style={{fontSize: 10, color:'white'}}>daily</Text></Text>
                  </View>
                </View>
                <View style={{flex: 1}}>
                  <Text style={{color: 'white'}}>Wonderful private parking spot in the shade!</Text>
                  <Text style={styles.heading}>Location</Text>
                  <Text style={{color: 'white'}}>2206 Pine St, San Francisco, CA 94115</Text>
                  <Text style={styles.heading}>Availability</Text>
                  <Text style={{color: 'white'}}>Friday: 6:00pm - 12:00am</Text>
                  <Text style={{color: 'white'}}>Saturday: All day</Text>
                  <Text style={{color: 'white'}}>Sunday: All day</Text>
                  <Text style={styles.heading}>Ratings</Text>
                  <View style={{flex: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Ionicons name="md-star" size={32} color="yellow" style={{flex: 1, textAlign: 'center'}}/>
                    <Ionicons name="md-star" size={32} color="yellow" style={{flex: 1, textAlign: 'center'}}/>
                    <Ionicons name="md-star" size={32} color="yellow" style={{flex: 1, textAlign: 'center'}}/>
                    <Ionicons name="md-star-half" size={32} color="yellow" style={{flex: 1, textAlign: 'center'}}/>
                    <Ionicons name="md-star-outline" size={32} color="yellow" style={{flex: 1, textAlign: 'center'}}/>
                  </View>
                  <TouchableOpacity
                      onPress={this._onPressButton}
                      activeOpacity={0.6}
                      style={styles.button}>
                    <Text style={styles.buttonText}>{'Book Now'.toUpperCase()}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
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
        flex: 1,
        backgroundColor: '#414141',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
    },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  button: {
    backgroundColor: '#1c75bc',
    borderRadius: 20,
    justifyContent: 'center',
    height: 40,
    padding: 5,
    marginTop: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold'
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
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
      color:'white'
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
