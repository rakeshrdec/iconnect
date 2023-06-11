/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/screens/login/login';
import {name as appName} from './app.json';
import LoginNavigation from './src/screens/login/logInNavigation';
import PushNotification from "react-native-push-notification";

PushNotification.configure({

    // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    // notification.finish(PushNotification.FetchResult.NoData);
  },
  requestPermissions: Platform.OS === 'ios'
});

AppRegistry.registerComponent(appName, () => LoginNavigation);
