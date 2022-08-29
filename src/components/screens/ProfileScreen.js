import {connect} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import ScreenWrapper from '../wrappers/ScreenWrapper';
import ContentWrapper from '../wrappers/ContentWrapper';
import Button from '../buttons/Button';
import ProfileCard from '../Cards/ProfileCard';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  Alert,
  ScrollView,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import rightArrowIcon from '../../assets/icons/right_arrow.png';
import orderIcon from '../../assets/icons/document.png';
import notificationIcon from '../../assets/icons/notification.png';
import sendIcon from '../../assets/icons/send.png';
import helpIcon from '../../assets/icons/help.png';
import {retrieveData, removeData} from '../../services/asyncStorage';
import theme from '../../styles/theme';
import {useSelector} from 'react-redux';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 18,
    paddingHorizontal: 18,
    bottom: 10,
  },
  devider: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginVertical: 18,
  },
  row: {
    alignItems: 'center',
    backgroundColor: theme.colors.light,
    flexDirection: 'row',
    height: 60,
    borderRadius: 10,
  },
  icon: {
    height: 25,
    width: 25,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
  },
  subTitleWrapper: {
    padding: 3,
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  withBorder: {
    borderBottomWidth: 0.5,
    borderColor: theme.colors.grey_dark,
  },
  rightIcon: {
    height: 15,
    width: 15,
  },
  centerView: {
    justifyContent: 'center',
  },
});

const ProfileScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const [loading] = useState(false);
  const [user, setUser] = useState('');
  const Touchable =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

  useEffect(() => {
    retrieveData('user')
      .then(userData => JSON.parse(userData))
      .then(userData => {
        if (userData) {
          setUser(userData);
        }
      })
      .catch(err => console.error(err));
  }, [isFocused]);

  const handleLogout = () =>
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Logout',
        onPress: () => {
          removeData('token');
          removeData('user');
          navigation.navigate('SplashScreen');
        },
      },
    ]);

  const AppState = useSelector(state => state);
  useEffect(() => {
    console.log({AppState});
  }, [AppState]);

  return (
    <ScreenWrapper background="neutral">
      <ScrollView>
        <View style={styles.container}>
          <ProfileCard user={user} />
          <View style={styles.devider} />
          <FlatGrid
            itemDimension={250}
            data={items}
            spacing={8}
            renderItem={({item}) => (
              <Touchable
                onPress={() => navigation.navigate(item.navigateScreen)}>
                <View style={[styles.row]}>
                  {!!item.icon && (
                    <View style={styles.iconContainer}>
                      <Image
                        style={styles.icon}
                        source={item.icon}
                        resizeMode="contain"
                      />
                    </View>
                  )}
                  <View style={[styles.titleContainer]}>
                    <Text size="medium">{item.name}</Text>
                  </View>

                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.rightIcon}
                      source={rightArrowIcon}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </Touchable>
            )}
          />
        </View>
      </ScrollView>
      <ContentWrapper padding="wide" color="neutral">
        <Button
          loading={loading}
          title="Log Out"
          textTransform="capitalize"
          weight="semibold"
          onPress={() => handleLogout()}
        />
      </ContentWrapper>
    </ScreenWrapper>
  );
};

export default connect(null, null)(ProfileScreen);
const items = [
  {
    name: 'My Orders',
    icon: orderIcon,
    navigateScreen: 'OrderScreen',
  },
  {
    name: 'Notifications',
    icon: notificationIcon,
    navigateScreen: 'OrderScreen',
  },
  {
    name: 'Change Language',
    icon: notificationIcon,
    navigateScreen: 'OrderScreen',
  },
  {
    name: 'Dark Mode',
    icon: notificationIcon,
    navigateScreen: 'OrderScreen',
  },
  {
    name: 'Share App',
    icon: sendIcon,
    navigateScreen: 'OrderScreen',
  },
  {
    name: 'Support & Help',
    icon: helpIcon,
    navigateScreen: 'OrderScreen',
  },
];
