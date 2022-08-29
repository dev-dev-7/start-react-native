
import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native'
import CreateIcon from '../assets/icons/create.png';
import HammerIcon from '../assets/icons/hammer.png';
import swapIcon from '../assets/icons/swap.png';
import theme from '../styles/theme';

const styles = StyleSheet.create({
    btnWrapper: {
        opacity: 1,
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        bottom: 35,
        zIndex: 1
    },
    button: {
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 50,
        position: 'absolute',
        bottom: 0,
        shadowOpacity: 5.0,
    },
    actionBtn: {
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 1,
        borderWidth: 5
    }
});

const AdvanceTabButton = ({navigation, isBtnEnabled}) => {
    const [btnEnabled, setBtnEnabled] = useState(isBtnEnabled);
    const handleToggle = () => {
        btnEnabled ? setBtnEnabled(false) : setBtnEnabled(true)
    }

    const handleCreateAuction = () => {
        setBtnEnabled(false)
        navigation.navigate('CreateAuction');
    }

    return (
        <View style={styles.btnWrapper}>
            {btnEnabled ? <View style={{ height: 140, width: "60%", backgroundColor: theme.colors.primary_lighter, borderRadius: 15, padding: 10, marginBottom: 50, borderColor: theme.colors.lighter, borderWidth: 1 }}>
                <TouchableOpacity onPress={() => handleCreateAuction()}>
                <View style={{ padding: 10, backgroundColor: theme.colors.primary_light, alignItems: 'center', borderRadius: 10, marginHorizontal: 5, marginVertical: 3, flexDirection: 'row', alignItems: 'center', borderColor: theme.colors.lighter, borderWidth: 1 }}>
                    <Image style={{ width: 20, height: 20 }} resizeMode="contain" source={HammerIcon} />
                    <Text style={{ marginLeft: 5 }}>{"Create Auction"}</Text>
                </View>
                </TouchableOpacity>
                <View style={{ padding: 10, backgroundColor: theme.colors.lighter, alignItems: 'center', borderRadius: 10, marginHorizontal: 5, marginVertical: 3, flexDirection: 'row', alignItems: 'center', borderColor: theme.colors.lighter, borderWidth: 1 }}>
                    <Image style={{ width: 20, height: 20 }} resizeMode="contain" source={swapIcon} />
                    <Text style={{ marginLeft: 5 }}>{"Sell an Item"}</Text>
                </View>
            </View> : ""}
            <TouchableWithoutFeedback onPress={() => { handleToggle() }}>
                <View style={[styles.button, styles.actionBtn]}>
                    <Image style={{ width: 55, height: 55 }} resizeMode="contain" source={CreateIcon} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}
export default AdvanceTabButton;