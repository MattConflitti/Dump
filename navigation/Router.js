import {
  createRouter,
} from '@exponent/ex-navigation';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  splash: () => SplashScreen,
  home: () => HomeScreen,
  login: () => LoginScreen,
  links: () => LinksScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
}));
