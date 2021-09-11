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
      <View style={styles.topContainer}>
        <View style={styles.lottieContainer}>
          <LottieView
            source={require('./images/52103-love.json')}
            ref={animation}
            loop={true}
            autoSize={false}
            // progress={0}
          />
        </View>

        <Text
          style={{
            color: '#196F3D',
            fontSize: 14,
            paddingTop: 20,
            marginHorizontal: 10,
          }}>
          {`My fears are weaker only because of you...Nikita Jain I owe my life to you.`}
        </Text>
        <Text
          style={{
            color: '#D4AC0D',
            fontSize: 12,
            padding: 20,
            textAlign: 'left',
          }}>
          {`
Hi there...
I am writing this mail only as a smallest token of my love. For us officially one past has passed and its all your effort and credits goes to you for making this relationship so strong. Ab ye relationship unta  hai jo main sochta tha 6 months mein hoga..
          Toh ho gaya hamara 1 month over and its was great. Thodi problems hain but I hope wo bhi over ho jayengi.
          Leaving problems....lets tell me how I feel abhi...ek mahine baad
          
Yes you are my strength. Sachii wala support, I may hv lost hope of being with you ya fir ye bhi bol sakta maine aap ko kho hi diya tha...but you pulled me back...n here I am with all my jigara ...just to love you and be with you.
          
Ok...I may have not told you...my fisrt impression of yours...bataya hai...but itna sahi ni...ab batata hun..
I was sitting on my seat ...first days.. aap Ekta ji ke paas aye aur kuch kuch bolne lage...ek toh aap sardar ji lage mujhe...fir mind mein socha ...kya buttering kare ja rahi hai ye ladki....chup kyun ni hoti..
but fir aapne mujhse kuch kaha...
Main socha...ahem ahemm..wah ladki mujhse khud baat kar rahi hai...
Fir my day was over and back to ghar...
Next 1-2 din mein I started liking you...means boy wala like....you are pretty...kya karun...pure office mein ek aap ho aur sonu hai jo ok hai but totally not my types....aap toh the....u were speaking to me...smiling ...bas aur kya chahiye zindagi mein...
Maggi ya kuch kuch cheezein aap le kar aate the...main mana karta tha...but I wanted nikita yahin par rah jaye...Maine apko kabhi kabhi bahot time tak dekha hai...apka face mein ek cheeze hain...serenity..
          aapki smile is a cure for all my troubles ...apko I can sit and watch for hours...
          
2-4 din hue the...bola gaya...vivek your seat is changed...sourcing room..
          Sourcing room mein main apko thoda bhool gaya...n mind mein ye bhi tha ki...vivek ye ladki tujhe kabhi nahi mil sakti.....fir kya wahi faltu sa kaam...and ghar....
          Ek mahina hua...aap kabhi kabhi dikhte the...kabhi kabhi Harsh se milne aate the...lunch room mein milte the...I wanted to know you more...aapki khushi apke gum sab kuch...
          I always tried my best to be very respectable and ache se dikhun in front of you...Finally March khatam hua ...and I was back ...near you...
          I wanted to have lunch with you....isse ye hota we can get to know each other or ....mera irada toh bas apko dekhna ...apko jaan-ne ka tha...
          Dheere dheere wo bhi hone laga ...hum log lunch saath mein karne lage...and fir ek aur jhatka diya aapne..
          
Lassi laye sabhi ke liye...maine socha sab ke liye aayi hai toh ye ladki mujhe bhi degi......but hua kya poocha bhi ni.....manish mana karta gaya...mujhe ni peeni..ni peeni...maine socha ab toh ye last lassi mujhe offer hogi but nai...ladki ke mann mein kuch hai hi ni toh kyun degi...
          NAHI MILI LASSI....
          dil toh toota hua tha hi...aur bhi udaas ho gaya..
          
Main hamesha try karta tha....ki hamara group baney...toh I pitched for saturday outing wala plan...plan fail hua...but mera whatsapp group ban gaya...yeeeh wow hurray...karan se bol kar apka no. aa gaya...
          fir kya tha...
          thodi si aas jagi ....aap nahi toh apki khushi...aap nahi apka dukh...kuch bhi chalta mujhe..
          arey haan usi beech hum pizza lene bhi toh gaye the...mast tha wo din mere liye.....
          
Toh rail gaadi kahan tak badi...haan no. mil gaya
          Ab hum log saath mein mein jaane lage...office se metro.....wow metro tak saath...kabhi sonu kabhi ankita...
          momos...n hamari achi wali baat hone lagi.....
          Fir ek din inaya ke liye footwear lene gaye....maine socha wow mujhe bhi bulaya hai..acha lagne laga tha...n ye bhi lag raha tha...ki aap single ho..
          but jaise ki aap jante ho meri khushi jaada time nahi tikti...
          next day...office ke baad...me you and maindhak...shopperstop...main socha watch ladkon wali kyun...tabhi ankita ne bola..."abhi pichle mahine hi toh tune usko gift diya tha...rahne de"....
          Chann se jo toote sapna...dil suna sunna lage re...fir se ek aur jhatka...
          meri heartbeat zero aur maine smile karte hue poocha ....Special someone...Dono ka reply haan..hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

Chalo koi ni...ghar gaya ...laptop uthaya aur same watch search kari...mili ni...apne friend ko bhi bol diya ...ye watch chahiye...lowest rate pe..
          Usi din auto mein ankita ne kuch shaadi ke baare mein bola...fir aur dukh hua...maine socha aapki aur uski....ek ladki mili itne time baad jo mujhe real mein achi lagi ...wo fir se gayi..
          
Note: Mujhe last ladki ...Dhwani pasand aayi thi , 2009 mein...mere indore wale frnd sajal ki gf...but wo bhi aisi si hi thi....uske baad shayad manisha jisko shayad maine 12th mein dekha tha last....aur jo hi thi wo bas attraction...
          
Usi beech main ghar pe akela hota tha n group pe msgs ka wait karta tha...hamari chat bhi hone lagi ...May starting tha ye.....I just needed a reason to chat ...chahe wo apke likes ...interests...khushi ...gum...kuch bhi..
          
          reason same that...I wanted to be someone jo apki problems kam kar sake.....kyunki mujhe pata tha...as a soul you were pure...jisse apni padhi hi ni hai....jo bas apno ke liye jeeti hai...
          Ek difference bataun mujhme aur aapme..... aap kisi ke liye kuch bhi sacrifice karte ho na wo aap kisi ko dikhne ni dete ur log dekhte bhi nahi...
          but wahi kaam jab main karta hun ...ya koshish karta hun...wo kuch bhi karke logo ko dikh jata hai...and I become a person jo sabke liye sochta hai...
          but aap mujhse kahi zaada deserve karte ho logo ki appreciation...Shayad isiliye i love you...
          
haan main kahan tha....
          haan ab hum chat bhi karne lage and metro mein bhi saath lage...but mere mann mein ye tha kaash main Mr. Busy hota toh dikhata ki aap kya ho...n kya deserve karte ho...n ek choti si hope thi  may be I may still have a chance ...
          Fir kya tha...maine ek aur topic dhoond liya...chat ka..
          maine aapse poocha..."Aap inni jaldi office kaise aa jate ho"....aapne bola tallent...
          Lo ji ab se I have to wake up early and reach mall jaldi so that I can join you will coming to office...from mall to office....chota distance tha but mere liye apke saath 5 minute ki walk hi jaadu thi...
          
Unhi dino mein I saw your irritation...dukhi wala look...aap Aldo ke showroom ke samne se ja rahe the..Aap dukhi the....Mr. busy ladai kar raha tha...
          Ek baat bataun...us time pe mujhe khush hona chahiye tha...wow you two are fighting...but apka face itna dukhi tha.....i just want to you to smile ....I wanted ki apka wo Mr. Busy fir se apke saath achaa ho jaye...
          I was praying for a  girl whom I love...please god usko uska bf mil jaye jaisa wo chahti hai.....pagal tha main...
          Shayad ye main apke liye nahi khud ke liye maang raha tha....becoz ur smile was now related to me...I want ki main khush rahun aapko khush dekh kar......
          
Hmmm...apse hi baat kar raha tha...time is 9:49 PM date is 19th June 2015.
          
Next day... ek aur baat ....main chattarpur se metro ke last coach mein ata tha hamesha...n jab maliviya nagar ata tha...toh hamesha nazarein aapko dhoondhti thi ...kaash aap mil jao n hum mall tak saath saath..
          
toh next day aisa hi hua....main last coach mein ...toh apke direction mein first coach hua...main aapko dekha ...khush hua bahot...fir jhoomte jhoomte khushi khushi aapke paas aya aur bola...Office ni jana kya..without noticing ki you were talking to Mr. Busy...fir se wo dull face....no smile...tension..
          Fir aapne jaldi se phone rakh diya....and apna mood acha kiya...face pe smile chipkayi n mujhse baat karne lage jaise kuch hua hi naa ho.. mujhe awkward feel na ho...isilye aap apna dukh bhool gaye...
          
I was noticing ye saari baatein...noticing you each single step...your smiles for offc ppl...how you were comfortable with everyone in the office...just showing your happy face to make everyone around you happy n comfortable..
          
Fir aya 13th May the deciding moment ...jab maine mann se aapko manga...again I just wanted to see you...listen to you...aap jo bhi bol rahe the..main jaan ke beech beechmein idhar udhar dekh leta tha...taki ye na lage main apko stare kar raha hun...
          Apne mujhe first time apne baare mein bataya (kuch bataya tha) mujhe wo quality bahot achi lagi aapki.....aisa kuch khas nahi tha,....tha khas ...special ...but wo kuch second kaafi the ...to decide ki jo bhi main apke baare mein soch raha hun...samajh raha hun...wo sab sach hai...and you are the one for me.
          
Fir Kurti li aapke liye maine ....main ek ladka...khud gaya kurtiyaan select kari aur aapko pics bheji...ab sochta hun toh lagta nahi ki maine ye sab kiya....
          Fir jab main wapis aya lko se....aapka koi msg hi ni aya ...mera mood bhi kharab hua...metro mein ladai hui...auto wale se bahas hui...full dimag kharab..
          Office pohacha aap late ho....maine socha ye ladki mere baare mein kuch bhi ni soch rahi...main faltu mein peeche laga hua hun...Fir I waited for you....idhar udhar...lift ke khada hua tha...jab aapko lift mein dekha...
          sach bol raha hun....lift bhari hui thi but mujhe sirf aap dikh rahe the....n maine apko wave kiya..
          kuch seconds baad hosh aya ...dheeraj ji ko dekha...maine kaha lo...ho gaya kaand.
          
aapki ek aur especialty ....achi baat...may be you knew main aapke liye laya hun hun kurti....but phir bhi apne khud ko sideline kar diya help me to give kurtis first to ekta ji and ankita...and aapne apne kurti ke liye poocha bhi nahi...
          
And I was like.....I just wanted to gift you your kurti..... aapse sun-na tha apko kaisi lagi...kuch bhi ...kaise bhi reviews...
          fir hamari chatting lambi hoti gayi...n jaise jaise maine apko aur jaana...aur love hota gaya..
          Hamari pink shirts...my research so that we may wear that shirt together....maine ek jagah likha bhi tha...date jis din aapne pink shirt pahni thi...
          
Fir pink shirt aur uska bawaal office mein...
          
arey baat bhool  gaya starting ki.....aapne mujhe bhai bola tha...*8-&gt; day dreaming..
          
Dheeraj ji ke saath idli...mera aapko brown paper dena so that apki shirt kharab na ho....fir Dheeraj ka tease karna...
          
Mera khushi ka din...Office mein 4 baje ...main aapki side aya...apne fir mujhe bhai bola...but this time aapne dheeraj ji se sorry bola...ki next time se galti ni hogi..
          Main socha aap aur main ....kuch toh hai ON...its ONNNN..
          
But fir se ....kaale badal aaye....kisi ne kuch kaha hamare baare mein...u called me I was happy...but at the same time I was worried about your image in the office...People dont realise when they do loose talk about a girl....
Fir I thought I should maintain a distance for your own good.....Tab tak june aa gaya..
          
Hamari tanu weds manu cancel hui...but dil dhadakne do ne meri lottery laga di....we both knew we had something...apka mujhe dekha....thoda thoda darr kahin ekta ji na dekh lein...phir bhii hum dono ka ek dusre ko dekhna....I loved to watch you laugh for the first time..It was dream coming true...
          
Hamari chuski....fir car mein what kind of girl I like...metro se aapko ghar drop karna...sab kuch achaa ho raha tha..
Finally on 18 ya 19th maine bataya aapko I want propose you at bangla sahib...n on 20th June I said those words....I was not sure of what I said....sab tha dimaag mein ...I just wanted to confirm that by going to a temple...
          I promised you few things...which i hope I may follow till the end of this life.....
          Now from 20th June to 20th July ....you are not only my love...
          You are my Strength...if you believe me...more than my love you are my strenght...my support pillar...
          You are the person I want to share my world....see your world...solve your problems....
          sab kuch tum ho...tum hii ho..
          
NIKITA JAIN ----- I LOVE YOU----BECOZ U ARE MY STRENGTH ----YOU ARE THE PERSON JISKE SAMNE I CAN CRY...JISKO MAIN USKI SAARI KHUSHI DUN...
          
NOTE: BAHOT KUCH NAHI LIKHA ....SHAYAD YAAD NAHI...YA FIR YAAD NAHI KAR RAHA...
THERE IS NOT A SINGLE REASON FOR ME TO NOT LOVE YOU...ADORE YOU...TO MAKE YOU MINE...
          `}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginBottom: 24,
  },
  lottieContainer: {
    height: 200,
    width: 300,
  },

  text: {textAlign: 'center'},
});
