import React from 'react';
import { ScrollView, StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import Text from '../../typography/Text';
import car from '../../../assets/icons/car.png';
import watch from '../../../assets/icons/watch.png';
import perfume from '../../../assets/icons/perfume.png';
import theme from '../../../styles/theme';

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
    },
    column: {
        backgroundColor: theme.colors.black,
        flexDirection:'row',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        borderRadius:10
    }
});

function CategoryListElement({ step }) {

    return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
            >
                <View style={styles.wrapper}>
                    <TouchableHighlight>
                        <View style={[styles.column, { opacity: 1 }]}>
                            <Image source={car} style={{width: 30, height: 30 }} />
                            <Text size="large" color="light" style={{marginLeft:5}}>{"Vehicle"}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={[styles.column, { opacity: 1 }]}>
                            <Image source={perfume} style={{width: 30, height: 30 }} />
                            <Text size="large" color="light" style={{marginLeft:5}}>{"Perfume"}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={[styles.column, { opacity: 1 }]}>
                            <Image source={watch} style={{width: 30, height: 30 }} />
                            <Text size="large" color="light" style={{marginLeft:5}}>{"Watch"}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={[styles.column, { opacity: 1 }]}>
                            <Image source={perfume} style={{width: 30, height: 30 }} />
                            <Text size="large" color="light" style={{marginLeft:5}}>{"Perfumees"}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
    );
}

export default CategoryListElement;