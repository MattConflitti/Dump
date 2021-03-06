import React from 'react';
import {
    Image,
    Linking,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View
} from 'react-native';

import { MonoText } from '../components/StyledText';
import Router from '../navigation/Router';

export default class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  };

  static route = {
    navigationBar: {
      visible: false,
    },
  }

  render() {
    return (
        <View style={{flex: 1, alignItems:'stretch'}}>
          <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, .3)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2}}></View>
          <Image style={{
                   flex: 1,
                   resizeMode: 'cover',
                   width: null,
                   height: null
                   }}
                 source={require('../assets/images/login-bg.jpg')}
          />
          <View style={{flex: 1, position: 'absolute', padding: 10, top: 0, left: 0, right: 0, bottom: 0, zIndex: 3}}>
            <View style={{
          justifyContent: 'center'
          }}>
              <Image style={{
                   width: 200,
                   resizeMode: 'contain',
                   alignSelf: 'center',
                   top: 20
                   }}
                     source={require('../assets/images/dump_logo.png')}
              />
            </View>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
              <View>
                <TouchableOpacity
                    onPress={this._onPressRegisterButton}
                    activeOpacity={0.6}
                    style={styles.registerButton}>
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._onPressLoginButton}
                    activeOpacity={0.6}
                    style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
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
  };

  _handleHelpPress = () => {
    Linking.openURL('https://docs.getexponent.com/versions/latest/guides/up-and-running.html#can-t-see-your-changes');
  };

  _onPressLoginButton = () => {
    this.props.navigator.push(Router.getRoute('login'));
  };

  _onPressRegisterButton = () => {
    this.props.navigator.push(Router.getRoute('registration'));
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  registerButton: {
    backgroundColor: '#1c75bc',
    borderRadius: 20,
    justifyContent: 'center',
    height: 40,
    padding: 5,
    marginBottom: 10
  },
  loginButton: {
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: 40,
    padding: 5,
  },
  registerButtonText: {
    textAlign: 'center',
    color: '#ffffff'
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#1c75bc'
  },
  textInput: {
    textAlign: 'center',
    color: '#999999',
    height: 40,
    padding: 5,
    borderColor: '#999999',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 20
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
