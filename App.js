import React from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import CodePush from 'react-native-code-push';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Splash from './src/screens/splash';
import Message from './src/screens/message';
const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: false,
  rollbackRetryOptions: {
    delayInHours: 1,
    maxRetryAttempts: 20,
  },
};

const Stack = createNativeStackNavigator();

class App extends React.Component {
  codePushStatusDidChange(status) {
    switch (status) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        // ToastAndroid.show('Downloading updates !', ToastAndroid.SHORT);
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        ToastAndroid.show('Updating our love', ToastAndroid.SHORT);
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        ToastAndroid.show('Love is the air', ToastAndroid.SHORT);
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        ToastAndroid.show(
          'Your one of the favourite color: Black',
          ToastAndroid.LONG,
        );
        break;
    }
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Message"
            component={Message}
            options={{
              headerBackVisible: false,
              title: 'Niks & Viks... to the moon',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '200',
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerBackVisible: false,
              title: 'Niks & Viks... to the moon',
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '100',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default CodePush(codePushOptions)(App);
