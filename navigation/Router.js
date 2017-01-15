import {
  createRouter,
} from '@exponent/ex-navigation';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import ListingScreen from '../screens/ListingScreen';
import StartScreen from '../screens/StartScreen';

export default createRouter(() => ({
  splash: () => SplashScreen,
  start: () => StartScreen,
  home: () => HomeScreen,
  login: () => LoginScreen,
  registration: () => RegistrationScreen,
  links: () => LinksScreen,
  settings: () => SettingsScreen,
  listing: () => ListingScreen
}));
