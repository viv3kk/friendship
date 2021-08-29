import React, {useState, useEffect, useRef} from 'react';

import {
  View,
  SafeAreaView,
  StyleSheet,
  BackHandler,
  Image,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Button, Text} from 'react-native-paper';
import LottieView from 'lottie-react-native';

import firestore from '@react-native-firebase/firestore';
import {useFocusEffect} from '@react-navigation/native';

// import {IMAGES_RAW} from '../../../images';

// IMAGES_RAW.map((item, idx) => {
//   firestore()
//     .collection('Media')
//     .doc(`${new Date().getTime()}_${idx}`)
//     .set({...item, id: `img_${new Date().getTime()}`})
//     .then(() => {
//       console.log('item added!');
//     });
// });

const Home = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState();
  let animation = React.createRef();
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

  const getImages = () => {
    firestore()
      .collection('Media')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data());
        setImages(documents);
        // do something with documents
      });
    setActiveIndex(true);
    animation && animation.current && animation.current.reset();
  };

  useEffect(() => {
    animation && animation.current && animation.current.play();
    setTimeout(() => {
      getImages();
    }, 3500);
  }, []);

  return (
    <ImageBackground style={{flex: 1}} source={require('./images/bg4.jpg')}>
      {activeIndex ? (
        <Swiper
          showsPagination={false}
          style={styles.container}
          showsButtons={false}
          horizontal={false}>
          {images.map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                <Image
                  style={styles.tinyLogo}
                  resizeMode="cover"
                  source={{
                    uri: item.uri,
                  }}
                />
                <Text style={{textAlign: 'center'}}>
                  {item.description || ``}
                </Text>
              </React.Fragment>
            );
          })}
        </Swiper>
      ) : (
        <View
          style={{
            flex: 0.8,
            width: '100%',
            // borderColor: 'black',
            // borderWidth: 1,
          }}>
          <LottieView
            source={require('./images/dino.json')}
            ref={animation}
            loop={true}
            autoSize={false}
            // progress={0}
          />
        </View>
      )}
      {activeIndex && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            bottom: 20,
          }}>
          <Button
            style={styles.btn}
            mode="outlined"
            onPress={() => {
              navigation.navigate('Message');
            }}
            uppercase={false}
            compact>
            {`<- Viks`}
          </Button>

          <Button
            style={styles.btn}
            mode="outlined"
            onPress={() => {
              navigation.navigate('Niks');
            }}
            uppercase={false}>
            {`Niks ->`}
          </Button>
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    marginTop: 60,
    zIndex: 1,
  },
  tinyLogo: {
    flex: 0.8,
    marginLeft: 8,
    marginRight: 8,
    padding: 4,
    borderRadius: 10,
    marginVertical: 10,
  },
  btn: {
    width: 100,
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 20,
  },
});

export default Home;
