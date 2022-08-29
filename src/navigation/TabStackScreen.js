import React, { useState } from 'react';
import {
  View,
  Image,
  Platform,
  Text,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/icons/home.png';
import BagIcon from '../assets/icons/bag.png';
import CalendarIcon from '../assets/icons/calendar.png';
import ProfileIcon from '../assets/icons/profile.png';
import HomeScreen from '../components/screens/HomeScreen';
// import ProfileScreen from '../screens/ProfileScreen';
import styles from './style';
import theme from '../styles/theme';
import AdvanceTabButton from './AdvanceTabButton';
// import ContentWrapper from '../components/wrappers/ContentWrapper';
// import globalStyles from '../styles/globalStyle';
import { removeData } from '../services/asyncStorage';

function MarketScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MarketScreen!</Text>
    </View>
  );
}

function CreateScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text>Ceare Aution!</Text>
      </View>
      <View>
        <Text>Sell An Item!</Text>
      </View>
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CalendarScreen!</Text>
    </View>
  );
}

function ProfileScreen({navigation}) {
  const handleLogOut = () => {
    removeData('access_token');
    navigation.navigate('Splash');
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ProfileScreen!</Text>
      <TouchableOpacity onPress={()=>handleLogOut()} style={{backgroundColor:theme.colors.primary, padding:10, borderRadius:5}}><Text style={{color:theme.colors.light}}>Log Out</Text></TouchableOpacity>
    </View>
  );
}

const TabStackScreen = ({ navigation }) => {
  const [btnEnabled, setBtnEnabled] = useState(false);
  const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

  const Tab = createBottomTabNavigator();
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
        <AdvanceTabButton navigation={navigation} btnEnabled={btnEnabled} />
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              position: 'absolute',
              elevation: 0,
              backgroundColor: theme.colors.dark,
              height: Platform.OS === 'ios' ? 70 : 60,
              paddingBottom: 0,
              ...styles.shadow
            },
          }}>
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={focused ? styles.tabFocused : styles.tab}>
                    <Image
                      source={HomeIcon}
                      resizeMode="contain"
                      style={styles.tabIcon}
                    />
                  <Text style={styles.tabText}>{"Home"}</Text>
                </View>
              ),
              headerTitle: null,
            }}
          />
          <Tab.Screen
            name="Market"
            component={MarketScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={[focused ? styles.tabFocused : styles.tab, { marginRight: 20 }]}>
                  <Image
                    source={BagIcon}
                    resizeMode="contain"
                    style={styles.tabIcon}
                  />
                  <Text style={styles.tabText}>{"Marketplace"}</Text>
                </View>
              ),
              // header: props => (
              //   <ContentWrapper
              //     direction="row"
              //     justify="center"
              //     align="center"
              //     padding={'normal'}
              //     gutterX={'none'}
              //     gutterY={'none'}>
              //     <View style={styles.leftArrow}>
              //       <Touchable onPress={() => props.navigation.goBack()}>
              //         <Image source={ArrowLeft} style={styles.arrow} />
              //       </Touchable>
              //     </View>
              //     <Text style={globalStyles.headerText}>{props.route.name}</Text>
              //   </ContentWrapper>
              // ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={[focused ? styles.tabFocused : styles.tab, { marginLeft: 20 }]}>
                  <Image
                    source={CalendarIcon}
                    resizeMode="contain"
                    style={styles.tabIcon}
                  />
                  <Text style={styles.tabText}>{"Calendar"}</Text>
                </View>
              )
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={focused ? styles.tabFocused : styles.tab}>
                  <Image
                    source={ProfileIcon}
                    resizeMode="contain"
                    style={styles.tabIcon}
                  />
                  <Text style={styles.tabText}>{"Profile"}</Text>
                </View>
              )
            }}
          />
        </Tab.Navigator>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TabStackScreen;