import {StyleSheet} from 'react-native';
import theme from './theme';

var globalStyles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerText: {
    color: theme.colors.primary_dark_txt,
    fontFamily: 'Almarai-Bold',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
  },
});

export default globalStyles;
