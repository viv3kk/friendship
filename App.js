import React from 'react';
import {View, Text, ToastAndroid, Alert} from 'react-native';
import CodePush from 'react-native-code-push';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Splash from './src/screens/splash';
import Message from './src/screens/message';
import Niks from './src/screens/niks';
import Viks from './src/screens/viks';

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
  // codePushStatusDidChange(syncStatus) {
  //   switch (syncStatus) {
  //     case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
  //       ToastAndroid.show('Lets enter niks world..', ToastAndroid.SHORT);
  //       break;
  //       // case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
  //       //   ToastAndroid.show('Manya loves clothes', ToastAndroid.SHORT);
  //       //   break;
  //       // case CodePush.SyncStatus.AWAITING_USER_ACTION:
  //       //   ToastAndroid.show('Aunty plays mobile games', ToastAndroid.SHORT);
  //       break;
  //     case CodePush.SyncStatus.INSTALLING_UPDATE:
  //       ToastAndroid.show('Uncle loves plants', ToastAndroid.SHORT);
  //       break;
  //     case CodePush.SyncStatus.UP_TO_DATE:
  //       ToastAndroid.show('Boozo is love.. Boozo is life.', ToastAndroid.SHORT);
  //       break;
  //     case CodePush.SyncStatus.UPDATE_IGNORED:
  //       // ToastAndroid.show('Update cancelled by user.', ToastAndroid.LONG);
  //       break;
  //     case CodePush.SyncStatus.UPDATE_INSTALLED:
  //       // ToastAndroid.show(
  //       //   'Update installed and will be applied on restart.',
  //       //   ToastAndroid.LONG,
  //       // );
  //       break;
  //     case CodePush.SyncStatus.UNKNOWN_ERROR:
  //       ToastAndroid.show('An unknown error occurred.', ToastAndroid.LONG);
  //       break;
  //   }
  // }

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
            name="Viks"
            component={Viks}
            options={{
              headerBackVisible: true,
              title: 'Niks & Viks...somewhere in past',
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '100',
              },
            }}
          />

          <Stack.Screen
            name="Niks"
            component={Niks}
            options={{
              headerBackVisible: true,
              title: 'Niks ... at a glimpse',
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '200',
              },
            }}
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
              headerShown: false,
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

// export default CodePush(codePushOptions)(App);
export default App;
