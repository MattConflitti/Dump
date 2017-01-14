import {
  createRouter,
} from '@exponent/ex-navigation';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MenuDrawer from '../components/MenuDrawer';

export default createRouter(() => ({
  splash: () => SplashScreen,
    basic: () => MenuDrawer,
  home: () => HomeScreen,
  links: () => LinksScreen,
  settings: () => SettingsScreen
}));
