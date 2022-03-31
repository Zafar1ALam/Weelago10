
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
import ButtonSeeProducts from '../components/ButtonSeeProducts';
const Category = ({ navigation }) => {
    const DATA = [
        {
            id: 1,
            image: "Product Name here",
            name: "Category Name"
        },

        {
            id: 2,
            image: "Product Name here",
            name: "Category Name"
        },
        {
            id: 3,
            image: "Product Name here",
            name: "Category Name"
        },
        {
            id: 4,
            image: "Product Name here",
            name: "Category Name"
        },
        {
            id: 5,
            image: "Product Name here",
            name: "Category Name"
        },
        {
            id: 6,
            image: "Product Name here",
            name: "Category Name"
        },
        {
            id: 7,
            image: "Product Name here",
            name: "Category Name"
        },
    ];
    return (
        <View style={STYLES.container_PH5_PV5}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={STYLES.fontSize25_4A4B4D_Quicksand_Bold}>
                    Categories</Text>

                <TouchableRipple onPress={() => console.log('j')}>
                    <SvgXml xml={Svgs.cartLogo} />
                </TouchableRipple>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{
                    marginTop: '5%', marginRight: '-3%'
                }}
                data={DATA}
                renderItem={({ item }) => {
                    return (

                        <View style={{
                            //    height: 150,
                            // paddingVertical: '5%',
                            //marginRight: -20,
                            //   backgroundColor: 'green',
                            justifyContent: 'space-between',
                            marginBottom: '7%',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>

                            <View style={{
                                //backgroundColor: 'green',
                                borderWidth: 1,

                                borderColor: COLORS.radicalRed,
                                // paddingVertical: '5%',
                                // paddingHorizontal: '7%',
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'

                            }}>
                                <Image
                                    style={{
                                        marginVertical: '5%',
                                        marginHorizontal: '1%'
                                    }}
                                    source={require('../utilities/images/goMart.png')} />
                            </View>
                            <Text style={
                                [STYLES.fontSize18_4A4B4D_Quicksand_Medium,
                                {
                                    //backgroundColor: 'red', 
                                    flex: 1,
                                    marginLeft: '3%'
                                }]}>{item.name}</Text>

                            <ButtonSeeProducts onPress={() => { navigation.navigate("Product") }} />
                        </View>

                    )
                }}
                keyExtractor={(item) => item.id}

            />

        </View>
    );
};


export default Category;