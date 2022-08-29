import {StyleSheet, Platform, Dimensions} from 'react-native';
import theme from '../styles/theme';

export default StyleSheet.create({
  shadow: {
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity:0.6
  },
  tabFocused: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabIcon: {
    width: 22,
    height: 22,
  },
  tabText: {
    color:theme.colors.light,
    fontSize:12,
    top:2
  }
});
