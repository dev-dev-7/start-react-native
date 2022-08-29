import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.accent,
    paddingVertical: 18,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    borderRadius: 12,
  },
  container1: {
    backgroundColor: theme.colors.purple_dark,
    borderRadius: 12,
  },
  main: {
    position: 'relative',
  },
  topLeft: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  detailsContainer3: {
    marginLeft: 8,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  detailsContainer: {
    width: '57%',
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  detailsContainer2: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
  },
  addButtonContainer: {
    width: 120,
    height: 110,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: theme.colors.ripple_light,
    padding: 15,
    margin: 10,
    borderRadius: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
  },
  detailsContainer4: {
    width: '100%',
    height: '30%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
