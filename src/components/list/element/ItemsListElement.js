import React from 'react'
import { ImageBackground, StyleSheet, TouchableHighlight, View, Text, ScrollView, Image } from 'react-native'
import FacePile from 'react-native-face-pile'
import liveSignal from '../../../assets/icons/liveSignal.png';
import eye from '../../../assets/icons/eye_views.png';
import shareWhite from '../../../assets/icons/share-white.png';
import videoBlack from '../../../assets/icons/video-black.png';
import watch from '../../../assets/images/watch.png';
import rolex from '../../../assets/images/rolex.png';
import liveUser1 from '../../../assets/images/live_user_1.png';
import liveUser2 from '../../../assets/images/live_user_2.png';
import perfume from '../../../assets/images/perfume.png';
import theme from '../../../styles/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        bottom: 5
    },
    cardWrapper: {
        backgroundColor: theme.colors.light,
        margin: 5,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: theme.colors.lighter
    },
    card: {
        width: 180,
        height: 180,
        margin: 5,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: theme.colors.lighter
    },
    cardHeadWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        top: 3
    },
    cardHeadLiveWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 30,
        margin: 5,
        borderWidth: 2,
        borderColor: theme.colors.primary_dark,
        borderRadius: 5
    },
    ccurrentBidWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 60,
        marginTop: 5,
        width: 120,
        height: 30,
        borderWidth: 2,
        borderColor: theme.colors.primary_dark,
        borderRadius: 5
    },
    cardHeadViewsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 93,
        height: 30,
        margin: 5,
        padding: 5,
    },
    cardHeadViewsUsers: {
        flexDirection: 'row',
        width: 50
    },
    cardHeadViews: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
    },
    titleWrapper: {
        alignItems: 'center',
        margin: 10,
        opacity: 0.9
    },
    title: {
        fontSize: 18,
        fontFamily: 'Almarai-Bold',
        color: theme.colors.light
    },
    text: {
        fontSize: 42,
    },
})

function ItemsListElement({ navigation, type }) {

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

    const handleOpneLive = () => {
        navigation.push('Live', {auction:''});
    }

    return (
        <View style={[
            styles.container
        ]}>
            {type == "live" ? <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
            >
                <TouchableHighlight onPress={()=>{handleOpneLive()}}>
                    <View style={[styles.card]}>
                        <ImageBackground source={watch} resizeMode="cover" style={{ flex: 1 }}>
                            <View style={[styles.cardHeadWrapper]}>
                                <View style={[styles.cardHeadLiveWrapper]}>
                                    <Image source={liveSignal} style={{ marginRight: 3, width: 10, height: 10 }} />
                                    <Text style={{ marginLeft: 3, fontSize: 16, color: theme.colors.primary_light }}>Live</Text>
                                </View>
                                <View style={[styles.cardHeadViewsWrapper]}>
                                    <View style={[styles.cardHeadViewsUsers]}>
                                        <FacePile numFaces={10} faces={FACES} circleSize={10} overlap={0.5} />
                                    </View>
                                    <View style={[styles.cardHeadViews]}>
                                        <Image source={eye} style={{ marginRight: 2, width: 15, height: 10 }} />
                                        <Text style={{ color: theme.colors.light, fontSize: 16 }}>104</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.titleWrapper]}>
                                <Text style={[styles.title]}>Lorem Ipsum</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={[styles.card]}>
                        <ImageBackground source={watch} resizeMode="cover" style={{ flex: 1 }}>
                            <View style={[styles.cardHeadWrapper]}>
                                <View style={[styles.cardHeadLiveWrapper]}>
                                    <Image source={liveSignal} style={{ marginRight: 3, width: 10, height: 10 }} />
                                    <Text style={{ marginLeft: 3, fontSize: 16, color: theme.colors.primary_light }}>Live</Text>
                                </View>
                                <View style={[styles.cardHeadViewsWrapper]}>
                                    <View style={[styles.cardHeadViewsUsers]}>
                                        <FacePile numFaces={10} faces={FACES} circleSize={10} overlap={0.5} />
                                    </View>
                                    <View style={[styles.cardHeadViews]}>
                                        <Image source={eye} style={{ marginRight: 2, width: 15, height: 10 }} />
                                        <Text style={{ color: theme.colors.light, fontSize: 16 }}>104</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.titleWrapper]}>
                                <Text style={[styles.title]}>Lorem Ipsum</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={[styles.card]}>
                        <ImageBackground source={watch} resizeMode="cover" style={{ flex: 1 }}>
                            <View style={[styles.cardHeadWrapper]}>
                                <View style={[styles.cardHeadLiveWrapper]}>
                                    <Image source={liveSignal} style={{ marginRight: 3, width: 10, height: 10 }} />
                                    <Text style={{ marginLeft: 3, fontSize: 16, color: theme.colors.primary_light }}>Live</Text>
                                </View>
                                <View style={[styles.cardHeadViewsWrapper]}>
                                    <View style={[styles.cardHeadViewsUsers]}>
                                        <FacePile numFaces={10} faces={FACES} circleSize={10} overlap={0.5} />
                                    </View>
                                    <View style={[styles.cardHeadViews]}>
                                        <Image source={eye} style={{ marginRight: 2, width: 15, height: 10 }} />
                                        <Text style={{ color: theme.colors.light, fontSize: 16 }}>104</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.titleWrapper]}>
                                <Text style={[styles.title]}>Lorem Ipsum</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableHighlight>
            </ScrollView> : ""}
            {type == "hot" ? <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
            >
                <TouchableHighlight>
                    <View style={[styles.cardWrapper]}>
                        <View style={[styles.card]}>
                            <ImageBackground source={rolex} resizeMode="cover" style={{ flex: 1 }}>
                                <View style={[styles.cardHeadWrapper]}>
                                    <View style={[styles.ccurrentBidWrapper]}>
                                        <Text style={{ fontSize: 8, color: theme.colors.light }}>Current Bid:</Text>
                                        <Text style={{ fontSize: 8, color: theme.colors.primary_light }}>AED 1,2549</Text>
                                    </View>
                                    <View style={[styles.cardHeadViewsWrapper]}>
                                        <View style={[styles.cardHeadViews]}>
                                            <Image source={shareWhite} style={{ width: 20, height: 20 }} />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.titleWrapper]}>
                                    <Text style={[styles.title]}>Lorem Ipsum</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <View style={{ paddingBottom: 5 }}>
                                <Text style={{ fontSize: 14, color: theme.colors.dark_light, fontFamily: 'Almarai-Regular' }}>{"Tesisendudu - De"}</Text>
                            </View>
                            <View style={{ paddingBottom: 0 }}>
                                <Text style={{ fontSize: 14, color: theme.colors.dark_light, fontFamily: 'Almarai-Regular' }}>{"Perfume"}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: theme.colors.light, alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, color: theme.colors.dark_light, fontFamily: 'Almarai-Light' }}>{"01h 06m 12s Left"}</Text>
                                <Image source={videoBlack} style={{ marginLeft: 50, marginBottom: 10, width: 40, height: 25 }} />
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={[styles.cardWrapper]}>
                        <View style={[styles.card]}>
                            <ImageBackground source={watch} resizeMode="cover" style={{ flex: 1 }}>
                                <View style={[styles.cardHeadWrapper]}>
                                    <View style={[styles.ccurrentBidWrapper]}>
                                        <Text style={{ fontSize: 8, color: theme.colors.light }}>Current Bid:</Text>
                                        <Text style={{ fontSize: 8, color: theme.colors.primary_light }}>AED 1,2549</Text>
                                    </View>
                                    <View style={[styles.cardHeadViewsWrapper]}>
                                        <View style={[styles.cardHeadViews]}>
                                            <Image source={shareWhite} style={{ width: 20, height: 20 }} />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.titleWrapper]}>
                                    <Text style={[styles.title]}>Lorem Ipsum</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <View style={{ paddingBottom: 5 }}>
                                <Text style={{ fontSize: 14, color: theme.colors.dark_light, fontFamily: 'Almarai-Regular' }}>{"Tesisendudu - De"}</Text>
                            </View>
                            <View style={{ paddingBottom: 0 }}>
                                <Text style={{ fontSize: 14, color: theme.colors.dark_light, fontFamily: 'Almarai-Regular' }}>{"Perfume"}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: theme.colors.light, alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, color: theme.colors.dark_light, fontFamily: 'Almarai-Light' }}>{"01h 06m 12s Left"}</Text>
                                <Image source={videoBlack} style={{ marginLeft: 50, marginBottom: 10, width: 40, height: 25 }} />
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={[styles.cardWrapper]}>
                        <View style={[styles.card]}>
                            <ImageBackground source={perfume} resizeMode="cover" style={{ flex: 1 }}>
                                <View style={[styles.cardHeadWrapper]}>
                                    <View style={[styles.ccurrentBidWrapper]}>
                                        <Text style={{ fontSize: 8, color: theme.colors.light }}>Current Bid:</Text>
                                        <Text style={{ fontSize: 8, color: theme.colors.primary_light }}>AED 1,2549</Text>
                                    </View>
                                    <View style={[styles.cardHeadViewsWrapper]}>
                                        <View style={[styles.cardHeadViews]}>
                                            <Image source={shareWhite} style={{ width: 20, height: 20 }} />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.titleWrapper]}>
                                    <Text style={[styles.title]}>Lorem Ipsum</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <View style={{ paddingBottom: 5 }}>
                                <Text style={{ fontSize: 14, color: theme.colors.dark_light, fontFamily: 'Almarai-Regular' }}>{"Tesisendudu - De"}</Text>
                            </View>
                            <View style={{ paddingBottom: 0 }}>
                                <Text style={{ fontSize: 14, color: theme.colors.dark_light, fontFamily: 'Almarai-Regular' }}>{"Perfume"}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: theme.colors.light, alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, color: theme.colors.dark_light, fontFamily: 'Almarai-Light' }}>{"01h 06m 12s Left"}</Text>
                                <Image source={videoBlack} style={{ marginLeft: 50, marginBottom: 10, width: 40, height: 25 }} />
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </ScrollView> : ""}
            {type == "best" ? <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
            >
                <TouchableHighlight>
                    <View style={{ backgroundColor: theme.colors.light, borderRadius: 15, margin: 10 }}>
                        <View style={{
                            width: 180,
                            height: 180,
                            marginBottom: 5,
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: theme.colors.lighter,
                            backgroundColor: 'red'
                        }}>
                            <ImageBackground source={rolex} resizeMode="cover" style={{ flex: 1 }} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}></ImageBackground>
                        </View>
                        <View style={{ marginHorizontal: 10, paddingBottom: 5 }}>
                            <View style={{ flexDirection: 'row', backgroundColor: theme.colors.light, alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, color: theme.colors.dark_light, fontFamily: 'Almarai-Regular' }}>{"Mariso Wallet"}</Text>
                                <View style={{ paddingHorizontal: 15, paddingVertical: 10, backgroundColor: theme.colors.positive_light, borderRadius: 10, marginLeft: 10 }}>
                                    <Text style={{ color: theme.colors.light }}>{"Buy"}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={{ backgroundColor: theme.colors.light, borderRadius: 15, margin: 10 }}>
                        <View style={{
                            width: 180,
                            height: 180,
                            marginBottom: 5,
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: theme.colors.lighter,
                            backgroundColor: 'red'
                        }}>
                            <ImageBackground source={rolex} resizeMode="cover" style={{ flex: 1 }} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}></ImageBackground>
                        </View>
                        <View style={{ marginHorizontal: 10, paddingBottom: 5 }}>
                            <View style={{ flexDirection: 'row', backgroundColor: theme.colors.light, alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, color: theme.colors.dark_light, fontFamily: 'Almarai-Regular' }}>{"Mariso Wallet"}</Text>
                                <View style={{ paddingHorizontal: 15, paddingVertical: 10, backgroundColor: theme.colors.positive_light, borderRadius: 10, marginLeft: 10 }}>
                                    <Text style={{ color: theme.colors.light }}>{"Buy"}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </ScrollView> : ""}
            {type == "auctioneers" ? <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
            >
                <TouchableHighlight>
                    <View style={{ margin: 5, flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                        <View style={{ width: 70, height: 70, borderRadius: 70, borderWidth: 1, borderColor: theme.colors.lighter }}>
                            <ImageBackground source={liveUser1} resizeMode="cover" style={{ flex: 1 }} imageStyle={{ borderRadius: 70 }}></ImageBackground>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
                            <Text style={{ fontSize: 12, color: theme.colors.light, fontFamily: 'Almarai-Bold' }}>{"Mariso Wallet"}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={{ margin: 5, flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                        <View style={{ width: 70, height: 70, borderRadius: 70, borderWidth: 1, borderColor: theme.colors.lighter }}>
                            <ImageBackground source={rolex} resizeMode="cover" style={{ flex: 1 }} imageStyle={{ borderRadius: 70 }}></ImageBackground>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
                            <Text style={{ fontSize: 12, color: theme.colors.light, fontFamily: 'Almarai-Bold' }}>{"Mariso Wallet"}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={{ margin: 5, flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                        <View style={{ width: 70, height: 70, borderRadius: 70, borderWidth: 1, borderColor: theme.colors.lighter }}>
                            <ImageBackground source={liveUser2} resizeMode="cover" style={{ flex: 1 }} imageStyle={{ borderRadius: 70 }}></ImageBackground>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
                            <Text style={{ fontSize: 12, color: theme.colors.light, fontFamily: 'Almarai-Bold' }}>{"Mariso Wallet"}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={{ margin: 5, flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                        <View style={{ width: 70, height: 70, borderRadius: 70, borderWidth: 1, borderColor: theme.colors.lighter }}>
                            <ImageBackground source={rolex} resizeMode="cover" style={{ flex: 1 }} imageStyle={{ borderRadius: 70 }}></ImageBackground>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
                            <Text style={{ fontSize: 12, color: theme.colors.light, fontFamily: 'Almarai-Bold' }}>{"Mariso Wallet"}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </ScrollView> : ""}
        </View>
    )
}

export default ItemsListElement;