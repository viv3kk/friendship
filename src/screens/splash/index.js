import React, {useEffect} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

export default SplashScreen = ({navigation}) => {
  let animation = React.createRef();

  useEffect(() => {
    setTimeout(() => {
      animation.current.play();
    }, 100);

    setTimeout(() => {
      navigation.navigate('Home');
    }, 2500);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LottieView
        source={require('./images/splash-lottie.json')}
        ref={animation}
        loop={true}
        autoSize={false}
        // progress={0}
      />
    </View>
  );
};
