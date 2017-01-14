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

export default class LoginScreen extends React.Component {
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
        <View style={styles.container}>
          <View>
            <Image style={{
                   width: 200,
                   height: 50,
                   resizeMode: 'contain'
                   }}
                   source={require('../assets/images/dump_logo.png')}
                   />
          </View>
          <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer}>
            <View style={styles.helpContainer}>
              <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  placeholder="Email/Phone Number"
              />
              <TextInput
                  style={styles.textInput}
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  secureTextEntry={true}
                  placeholder="Password"
              />
            </View>
            <View>
              <TouchableOpacity
                  onPress={this._onPressButton}
                  activeOpacity={0.6}
                  style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
  }

  _handleHelpPress = () => {
    Linking.openURL('https://docs.getexponent.com/versions/latest/guides/up-and-running.html#can-t-see-your-changes');
  }

  _onPressButton = () => {
    this.props.navigator.replace(Router.getRoute('home'));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  button: {
    backgroundColor: '#1c75bc',
    borderRadius: 20,
    justifyContent: 'center',
    height: 40,
    padding: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff'
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
