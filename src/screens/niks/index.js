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

import {useFocusEffect} from '@react-navigation/native';

const animations = {
  lonh_hair: {
    text: 'Niks has long ...very long...abhi she got a haircut',
    src: require('./images/long_hair.json'),
  },
  cooking: {
    text: 'Show cooks...remember bread pakoda n rajma',
    src: require('./images/cooking.json'),
  },
  she_walks: {text: 'Niks walks', src: require('./images/she_walks.json')},
  child: {text: 'Niks as baby', src: require('./images/child.json')},
  niksInSchool: {
    text: 'Niks in School..She was love then',
    src: require('./images/niks_in_school.json'),
  },
  // niksViksSchool: {
  //   text: 'Niks & Viks in school on Jupitor',
  //   src: require('./images/niks-viks-school.json'),
  // },
  schoolAfterSchol: {
    text: 'Niks after School.. being wicked when required',
    src: require('./images/school.json'),
  },
  niksWfh: {
    text: 'My niks working from home',
    src: require('./images/wfh.json'),
  },
  niksGoingOffc: {
    text: 'While going and coming from offc, she remembers to call viks',
    src: require('./images/going_offc.json'),
  },
  niksInOffc: {
    text: 'Managing offc like a pro',
    src: require('./images/wio.json'),
  },

  niksSleeping: {
    text: 'After all the hard work of the day, trying to make everyone happy,  she sleeps..dreaming (viks) about a happy future',
    src: require('./images/niks_sleeping.json'),
  },
};

const Niks = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState(Object.keys(animations));

  let animationRef = React.createRef();
  // useFocusEffect(
  //   React.useCallback(() => {
  //     const onBackPress = () => {
  //       return true;
  //     };
  //     BackHandler.addEventListener('hardwareBackPress', onBackPress);
  //     return () =>
  //       BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  //   }, []),
  // );

  useEffect(() => {
    setTimeout(() => {
      animationRef.current.play();
    }, 100);

    // setTimeout(() => {
    //   navigation.navigate('Home');
    // }, 2500);
  }, []);

  const next = () => {
    if (activeIndex + 1 < data.length) {
      setActiveIndex(activeIndex => activeIndex + 1);
    } else {
      setActiveIndex(activeIndex => 0);
    }

    animationRef.current.play();
  };

  return (
    <ImageBackground style={{flex: 1}} source={require('./images/bg4.jpg')}>
      <View
        style={{
          flex: 0.8,
          // width: '80%',
          margin: 16,
          justifyContent: 'center',
          alignItems: 'center',
          // borderColor: 'black',
          // borderWidth: 1,
        }}>
        <LottieView
          source={animations[data[activeIndex]]['src']}
          ref={animationRef}
          loop={true}
          autoSize={false}
          // progress={0}
        />
      </View>
      <Text style={{textAlign: 'center', marginHorizontal: 20}}>
        {animations[data[activeIndex]]['text'] || ''}
      </Text>
      <View
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'flex-end',
          alignSelf: 'flex-end',
          right: 0,
          marginBottom: 20,
          bottom: 0,
          position: 'absolute',
          marginHorizontal: 20,
          // bottom: 20,
        }}>
        <Button
          style={styles.btn}
          mode="outlined"
          onPress={next}
          uppercase={false}>
          {`->`}
        </Button>
      </View>
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

export default Niks;
