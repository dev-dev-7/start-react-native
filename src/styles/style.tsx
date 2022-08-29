import { StyleSheet } from 'react-native'
import theme from '../styles/theme';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
    },
    liveScreen: {
        width: '100%',
        height: '98%',
        borderRadius: 15,
        overflow: 'hidden',
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    liveBottom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 40
    },
    goLiveBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: theme.colors.primary,
        borderRadius: 25,
    },
    endLiveBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: theme.colors.negative,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
    },
    remoteContainer: {
        width: '100%',
        height: 150,
        position: 'absolute',
        top: 5
    },
    remote: {
        width: 150,
        height: 150,
        marginHorizontal: 2.5
    },
    noUserText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#0093E9',
    },
})