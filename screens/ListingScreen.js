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
        <MenuDrawer navigator={this.props.navigator} style={{flex: 1}}>
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
              <View style={{
                   backgroundColor: '#cccccc',
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
                       source={require('../assets/images/car-icon.png')}
                />
              </View>
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
                    <Text style={{fontSize: 18}}>Heritage Hill Single Parking Space</Text>
                  </View>
                  <View style={{flex: 2}}>
                    <Text style={{flex: 1}}>$4.00 <Text style={{fontSize: 10}}>hourly</Text></Text>
                    <Text style={{flex: 1}}>$15.00 <Text style={{fontSize: 10}}>daily</Text></Text>
                  </View>
                </View>
                <View style={{flex: 1}}>
                  <Text style={{color: '#333333'}}>Wonderful private parking spot in the shade!</Text>
                  <Text style={styles.heading}>Location</Text>
                  <Text style={{color: '#333333'}}>111 Houseman Ave NE, Grand Rapids, MI 49503</Text>
                  <Text style={styles.heading}>Availability</Text>
                  <Text style={{color: '#333333'}}>Friday: 6:00pm - 12:00am</Text>
                  <Text style={{color: '#333333'}}>Saturday: All day</Text>
                  <Text style={{color: '#333333'}}>Sunday: All day</Text>
                  <Text style={styles.heading}>Ratings</Text>
                  <View style={{flex: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Ionicons name="md-star" size={32} color="green" style={{flex: 1, textAlign: 'center'}}/>
                    <Ionicons name="md-star" size={32} color="green" style={{flex: 1, textAlign: 'center'}}/>
                    <Ionicons name="md-star" size={32} color="green" style={{flex: 1, textAlign: 'center'}}/>
                    <Ionicons name="md-star-half" size={32} color="green" style={{flex: 1, textAlign: 'center'}}/>
                    <Ionicons name="md-star-outline" size={32} color="green" style={{flex: 1, textAlign: 'center'}}/>
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
    backgroundColor: '#fff',
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
    marginTop: 10
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
