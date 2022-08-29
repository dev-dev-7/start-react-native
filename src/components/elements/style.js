import {StyleSheet, Platform} from 'react-native';
import theme from '../../styles/theme';

export default StyleSheet.create({
  shadow: {
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },
  tabFocused: {
    alignItems: 'center',
    justifyContent: 'center',
    top: Platform.OS === 'ios' ? 14 : 3,
  },
  tabIcon: {
    width: 21,
    height: 21,
  },
  tabIconFocused: {
    width: 30,
    height: 30,
  },
  leftArrow: {
    position: 'absolute',
    left: 26,
  },
  arrow: {
    width: 18,
    height: 18,
  },
});
