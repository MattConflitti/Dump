import React from 'react';
import {
    Image,
    Linking,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import Exponent from 'exponent';
import MenuDrawer from '../components/MenuDrawer';
import Router from '../navigation/Router';
import { Ionicons, Entypo, FontAwesome } from '@exponent/vector-icons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import AmenityButton from '../components/AmenityButton';

export default class AddListingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spot: {
        name: '',
        tagline: '',
        address: '',
        hourlyPrice: '',
        eventPrice: '',
        availability: {
          monday: '',
          tuesday: '',
          wednesday: '',
          thursday: '',
          friday: '',
          saturday: '',
          sunday: ''
        }
      },
      sliderValues: [9,17],
      image: undefined
    };
  };

  formatAvailabilityTime = (time) => {
    let suffix = 'AM';

    if(time > 12) {
      if(time === 24) {
        suffix = 'AM';
      } else {
        suffix = 'PM';
      }
      return (time - 12) + suffix;
    }

    if (time === 0) {
      time = 12;
    }

    return time + suffix;
  };

  sliderValuesChange = (values) => {
    this.setState({
      sliderValues: values,
    });
  };

  static route = {
    navigationBar: {
      visible:false,
    },
  };

  _pickImage = async () => {
    let result = await Exponent.ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4,3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({image: result.uri});
    }
  };

  _onAddListingPressButton = () => {
    this.props.navigator.push(Router.getRoute('home'));
  }

  render() {
    return (
        <MenuDrawer navigator={this.props.navigator} style={{flex: 1}} title="List a spot">
          <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
              <View className="spot-image"
                    style={{
                      flex: 1,
                      backgroundColor: '#cccccc',
                      height: 200,
                      justifyContent: 'center'}}>
                <Image source={{uri: this.state.image}} style={styles.backgroundImage} />
                <Ionicons name="md-camera" size={32} color="#ffffff" style={{textAlign: 'center', height: 50, backgroundColor: 'transparent'}} onPress={() => {this._pickImage()}}/>
              </View>
              <View style={{
              marginTop: 50,
              flex: 1,
              padding: 10,
              left: 0,
              right: 0,
              alignSelf: 'stretch'
              }}>
                <View style={{flex: 1}}>
                  <Text style={styles.textLabel}>Spot name</Text>
                  <TextInput
                      style={styles.textInput}
                      onChangeText={(text) => this.setState({spot: {...this.state.spot, name: text}})}
                      value={this.state.spot.name}
                      placeholder="Spot Name"
                      underlineColorAndroid={'transparent'}
                  />
                  <Text style={styles.textLabel}>Address</Text>
                  <TextInput
                      style={styles.textInput}
                      onChangeText={(text) => this.setState({spot: {...this.state.spot, address: text}})}
                      value={this.state.spot.address}
                      placeholder="Address"
                      underlineColorAndroid={'transparent'}
                  />
                </View>
                <View style={{flex: 2, flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <Text style={[styles.textLabel,styles.marginRight]}>Hourly Price</Text>
                    <TextInput
                        style={[styles.textInput, styles.marginRight]}
                        onChangeText={(text) => this.setState({spot: {...this.state.spot, hourlyPrice: text}})}
                        value={this.state.spot.hourlyPrice}
                        placeholder="Hourly Price"
                        underlineColorAndroid={'transparent'}
                    />
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={[styles.textLabel,styles.marginLeft]}>Event Price</Text>
                    <TextInput
                        style={[styles.textInput, styles.marginLeft]}
                        onChangeText={(text) => this.setState({spot: {...this.state.spot, eventPrice: text}})}
                        value={this.state.spot.eventPrice}
                        placeholder="Event Price"
                        underlineColorAndroid={'transparent'}
                    />
                  </View>
                </View>
                <Text style={[styles.textLabel,styles.marginLeft]}>Availability</Text>
                <Text style={{textAlign: 'center', marginBottom: 20}}>{this.formatAvailabilityTime(this.state.sliderValues[0])} - {this.formatAvailabilityTime(this.state.sliderValues[1])}</Text>
                <MultiSlider
                    values={this.state.sliderValues}
                    min={0}
                    max={24}
                    onValuesChange={this.sliderValuesChange.bind(this)}
                    style={{flex: 1}}/>
                <Text style={[styles.textLabel,styles.marginLeft]}>Amenities</Text>
                <View style={{flexDirection: 'row', flex: 2, marginBottom: 10}}>
                  <AmenityButton style={{flex: 1}}>
                    <Ionicons name="ios-cloudy-night-outline" size={32} color="white" style={{flex: 1, textAlign: 'center'}}/>
                    <Text style={{color: '#ffffff', textAlign: 'center'}}>Overnight Parking</Text>
                  </AmenityButton>
                  <AmenityButton style={{flex: 1}}>
                    <Ionicons name="ios-wifi" size={32} color="white" style={{flex: 1, textAlign: 'center'}}/>
                    <Text style={{color: '#ffffff', textAlign: 'center'}}>Free WiFi</Text>
                  </AmenityButton>
                </View>
                <View style={{flexDirection: 'row', flex: 2}}>
                  <AmenityButton style={{flex: 1}}>
                    <Entypo name="power-plug" size={32} color="white" style={{flex: 1, textAlign: 'center'}}/>
                    <Text style={{color: '#ffffff', textAlign: 'center'}}>Utilities</Text>
                  </AmenityButton>
                  <AmenityButton style={{flex: 1}}>
                    <FontAwesome name="truck" size={32} color="white" style={{flex: 1, textAlign: 'center'}}/>
                    <Text style={{color: '#ffffff', textAlign: 'center'}}>Large Cars Allowed</Text>
                  </AmenityButton>
                </View>
                <TouchableOpacity
                    onPress={this._onAddListingPressButton}
                    activeOpacity={0.6}
                    style={styles.button}>
                  <Text style={styles.buttonText}>{'List Now'.toUpperCase()}</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>


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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    position: 'absolute',
    height: 200,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
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
  marginRight: {
    marginRight: 5
  },
  marginLeft: {
    marginLeft: 5
  },
  button: {
    backgroundColor: '#1c75bc',
    borderRadius: 20,
    justifyContent: 'center',
    height: 40,
    padding: 5,
    marginTop: 10
  },
  textLabel: {
    fontSize: 12,
    fontWeight: 'bold'
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
  textInput: {
    textAlign: 'center',
    color: '#999999',
    height: 40,
    padding: 5,
    borderColor: '#999999',
    borderWidth: 1,
    marginBottom: 10,
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
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
