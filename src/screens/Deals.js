import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, FlatList, Image, ScrollView, Text, TextInput, View } from 'react-native';
import Svg, { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import STYLES from '../STYLES';
import { TouchableRipple, RadioButton } from 'react-native-paper';
import COLORS from '../utilities/colors/Color';
import TextInput1 from '../components/TextInput1';
import { SliderBox } from "react-native-image-slider-box";
import ButtonSeeAll from '../components/ButtonSeeAll';
import ButtonDetail from '../components/ButtonDetail';
const Deals = ({ navigation }) => {
    const DATA = [
        {
            id: 1,
            image: "Product Name here",
        },

        {
            id: 2,
            image: "Product Name here",
        },
        {
            id: 3,
            image: "Product Name here",
        },
        {
            id: 4,
            image: "Product Name here",
        },
        {
            id: 5,
            image: "Product Name here",
        },
        {
            id: 6,
            image: "Product Name here",
        },
        {
            id: 7,
            image: "Product Name here",
        },
    ];
    return (
        <View style={STYLES.container_PH5_PV5}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={STYLES.fontSize17_4A4B4D_Quicksand_Bold}>
                    Promotion Deals & Discount</Text>

                <TouchableRipple onPress={() => console.log('j')}>
                    <SvgXml xml={Svgs.cartLogo} />
                </TouchableRipple>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginTop: '5%' }}
                data={DATA}
                renderItem={({ item }) => {
                    return (

                        <View style={{
                            height: 150,
                            // paddingVertical: '5%',
                            //  backgroundColor: 'red',
                            marginBottom: '7%',
                        }}>
                            <Image style={{
                                width: '100%', height: '100%',
                                //    marginHorizontal: -20
                                //flex: 1, resizeMode: 'contain'
                            }}
                                resizeMode='contain'
                                source={require('../utilities/images/sliderImage1.png')} />
                        </View>

                    )
                }}
                keyExtractor={(item) => item.id}

            />

        </View>
    );
};

Deals.propTypes = {

};

export default Deals;