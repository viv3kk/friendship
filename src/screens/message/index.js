import React, {useEffect} from 'react';
import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';

export default Message = ({navigation}) => {
  let animation = React.createRef();

  useEffect(() => {
    setTimeout(() => {
      animation.current.play();
    }, 100);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView
          source={require('./images/eating-together.json')}
          ref={animation}
          loop={true}
          autoSize={false}
          // progress={0}
        />
      </View>
      <View
        style={{
          flex: 1,
          padding: 20,
        }}>
        <Text
          style={{
            color: '#F1C40F',
            fontSize: 14,
            // textAlign: 'justify',
          }}>
          {`Hi myself, Vivek aka Stuart - pikachu ka friend, tanu ka humsafar and Nikita ka Aafat (health ke liye)...
          
          `}
        </Text>
        <Text
          style={{
            color: '#1F618D',
            fontSize: 14,
            // textAlign: 'justify',
          }}>
          I prefer Stuart kyunki wo pikachu ka friend hai. Moving forward... I
          have completed Bachelor's of Engineering in Computer Science from
          UIET, Panjab University, Chandigarh and is currently working as SE
          with Justdial. At school I scored 84% and 75.8% in class 10th and 12th
          respectively. I am a brother of four best souls in this world and a
          blessed son. This equates to a family of eight i.e. Me Mummy Papa..
          Didi (Rekha), Neetu , Neha, Bhawna n you😍. My hobbies currently
          includes cooking and eating delicious food, be it Indian, chinese or
          anything. I would love to travel places , see things and explore them
          . I enjoy doing things in a team .. me n you a team against our odds
          in life. Like eating together, planning a trip together, buying stuff
          together. Favourite food or food I love- Mummy's food... Didi ka shahi
          kofte, burger. Neha is all-rounder...in food.. Rest bahar ka ...
          Chicken Mutton noodles momos.. Apni kachodi, aloo puri station wali..
          Dahi badey, gol gappe, tikki... I enjoy food only if the person with
          me is enjoying that food otherwise I just pretend ki I am liking food.
          I like going out and party with friends like hangouts...drinking
          ...flowing emotions out n stuff..
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  lottieContainer: {
    // borderWidth: 1,
    height: 200,
    width: 300,
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5F5F5',
  },
  buttonView: {
    width: '50%',
    padding: 10,
  },
  text: {textAlign: 'center'},
});
