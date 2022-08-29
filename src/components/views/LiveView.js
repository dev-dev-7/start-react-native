import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import { RtcLocalView, VideoRenderMode } from 'react-native-agora'
import { useInitializeAgora, useRequestAudioHook } from '../../services/agora/hook';
import ChatInput from '../inputs/ChatInput';
import theme from '../../styles/theme';
import liveUser1 from '../../assets/images/live_user_1.png';

const styles = StyleSheet.create({
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
});

const LiveView = () => {
    const isFocused = useIsFocused();
    useRequestAudioHook();
    const {
        channelName,
        isMute,
        isSpeakerEnable,
        joinSucceed,
        peerIds,
        setChannelName,
        joinChannel,
        leaveChannel,
        toggleIsMute,
        toggleIsSpeakerEnable,
    } = useInitializeAgora();

    const [message, setMessage] = useState("");

    useEffect(() => {
        if(isFocused){ 
            setTimeout(() => {
                let userid = 1234; // let join user to watch live
                joinChannel(userid);
            }, 1000);
        }
     }, [isFocused]);

    const renderVideos = () => {
        return joinSucceed ? (
            <View style={styles.liveScreen}>
                <RtcLocalView.SurfaceView
                    style={{ flex: 1, borderColor: theme.colors.primary_light, borderWidth: 1, borderRadius: 10, overflow: 'hidden' }}
                    channelId={channelName}
                    renderMode={VideoRenderMode.Hidden} />
                {/* {this._renderRemoteVideos()} */}
            </View>
        ) : null
    }

    const onChange = (val) => {
        setMessage(val)
    }

    return (
        <View style={styles.wrapper}>
            {renderVideos()}
            <View style={styles.liveBottom}>
                <TouchableOpacity
                    onPress={joinSucceed ? leaveChannel : joinChannel}
                    style={joinSucceed ? styles.endLiveBtn : styles.goLiveBtn}>
                    <Text style={styles.buttonText}>{joinSucceed ? 'End Live' : 'Go Live'}  </Text>
                </TouchableOpacity>
                {peerIds.map((peerId) => {
                    return (
                        <View style={{ width: '100%', padding: 10, marginBottom: 3, marginLeft: 10 }}>
                            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', }}>
                                <Image source={liveUser1} style={{ width: 25, height: 25, top: 2, borderRadius: 50, borderWidth: 1 }} />
                                <View style={{ justifyContent: 'center', marginLeft: 2 }}>
                                    <Text style={{ marginLeft: 5, fontFamily: 'Almarai-Regular', fontSize: 12, color: theme.colors.light }}>{`Joined User ${peerId}`}</Text>
                                    <Text style={{ marginLeft: 5, fontFamily: 'Almarai-Regular', fontSize: 12, color: theme.colors.primary }}>{"500 +"}</Text>
                                </View>
                            </View>
                        </View>
                    );
                })}
                <View style={{ width: '100%', padding: 10, marginBottom: 5, marginLeft: 10 }}>
                    <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <ChatInput
                                value={message}
                                onChangeText={(val) => onChange(val)}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default LiveView;