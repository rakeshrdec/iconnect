/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/screens/login/login';
import {name as appName} from './app.json';
import LoginNavigation from './src/screens/login/logInNavigation';

AppRegistry.registerComponent(appName, () => LoginNavigation);
