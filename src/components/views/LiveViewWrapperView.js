import React from 'react'
import { StyleSheet, View, Text, Image, Keyboard, TouchableWithoutFeedback } from 'react-native'
import FacePile from 'react-native-face-pile'
import timer from '../../assets/icons/time-square.png';
import eye from '../../assets/icons/eye_views.png';
import theme from '../../styles/theme'
import LiveView from './LiveView';
import DoubleButton from '../buttons/DoubleButton';
import { useCountdown } from '../../services/utilities/countDownDate';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.dark,
        padding: 5
    },
    liveViewWrapper: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        backgroundColor: theme.colors.dark
    },
    liveHeadWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        top: 15,
        left: 0
    },
    liveHeadTimerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        borderWidth: 1,
        borderColor: theme.colors.primary_light,
        borderRadius: 10,
        backgroundColor: theme.colors.dark,
        padding: 5
    },
    liveHeadTagWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        marginRight: 5
    },
    liveHeadViewsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '30%'
    },
    liveHeadViewsUsers: {
        flexDirection: 'row',
        width: '60%',
    },
    liveHeadViews: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
    }
});

function LiveViewWrapperView({ navigation, auction }) {

    const [days, hours, minutes, seconds] = useCountdown('2022-12-17T03:24:00');

    const FACES = [{
        id: "1",
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/147/147140.png'
    },
    {
        id: "2",
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
    },
    {
        id: "3",
        imageUrl: 'https://www.pngarts.com/files/11/Avatar-PNG-Transparent-Image.png'
    }
    ];

    return (
        <View style={[styles.container]}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={[styles.liveViewWrapper]}>
                    <LiveView auction={auction}/>
                    <View style={[styles.liveHeadWrapper]}>
                        <View style={[styles.liveHeadTimerWrapper]}>
                            <View style={{ width: '20%' }}>
                                <Image source={timer} style={{ width: 15, height: 15 }} />
                            </View>
                            <View style={{ width: '80%' }}>
                                <Text style={{ fontSize: 12, color: theme.colors.lighter }}>{hours + 'h'} {minutes + 'm'} {seconds + 's'} {'Left'}</Text>
                            </View>
                        </View>
                        <View style={[styles.liveHeadTagWrapper]}>
                            <Text style={{ marginRight: 15, fontSize: 16, color: theme.colors.primary, fontFamily: 'Almarai-Bold' }}>Live</Text>
                        </View>
                        <View style={[styles.liveHeadViewsWrapper]}>
                            <View style={[styles.liveHeadViewsUsers]}>
                                <FacePile numFaces={10} faces={FACES} circleSize={10} overlap={0.5} />
                            </View>
                            <View style={[styles.liveHeadViews]}>
                                <Image source={eye} style={{ marginRight: 2, width: 15, height: 10 }} />
                                <Text style={{ color: theme.colors.light, fontSize: 12 }}>104</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ bottom: 20, paddingHorizontal: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 20, marginHorizontal: 10 }}>
                            <Text style={{ color: theme.colors.light, fontFamily: 'Almarai-Regular' }}>Current Bid</Text>
                            <Text style={{ marginLeft: 10, color: theme.colors.primary, fontFamily: 'Almarai-Bold' }}>AED 12346</Text>
                        </View>
                        <DoubleButton titleLeft="Custom" titleRight="Bid Now" />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default LiveViewWrapperView;