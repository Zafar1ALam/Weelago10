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
const Products = ({ navigation }) => {
    const [productFlatlist, setProductFlatlist] = useState([
        {
            id: 1,
            productName: "Product Name",
            productPrice: 100,
            brandName: "Brand Name",
            categoryName: "Category Name",
            productQuantity: 1

        },
        {
            id: 2,
            productName: "Product Name",
            brandName: "Brand Name",
            productPrice: 200,
            categoryName: "Category Name",
            productQuantity: 1
        },
        {
            id: 3,
            productName: "Product Name",
            brandName: "Brand Name",
            productPrice: 300,
            categoryName: "Category Name",
            productQuantity: 1
        },
        {
            id: 4,
            productName: "Product Name",
            productPrice: 400,
            brandName: "Brand Name",
            categoryName: "Category Name",
            productQuantity: 1
        },
        {
            id: 5,
            productName: "Product Name",
            productPrice: 500,
            brandName: "Brand Name",
            categoryName: "Category Name",
            productQuantity: 1
        }, {
            id: 6,
            productName: "Product Name",
            productPrice: 600,
            brandName: "Brand Name",
            categoryName: "Category Name",
            productQuantity: 1
        },
    ])
    return (
        <View style={STYLES.container_PH5_PV5}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={STYLES.fontSize25_4A4B4D_Quicksand_Bold}>
                    Products</Text>

                <TouchableRipple onPress={() => console.log('j')}>
                    <SvgXml xml={Svgs.cartLogo} />
                </TouchableRipple>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{
                    marginTop: '7%', marginRight: '-3%'
                }}
                data={productFlatlist}
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

                                borderColor: COLORS.SunshadeFF9643,
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
                                    source={require('../utilities/images/categoryName.png')} />
                            </View>
                            <View style={{
                                flex: 1,// backgroundColor: 'red',
                                marginLeft: '3%'
                            }}>
                                <Text style={
                                    [STYLES.fontSize18_4A4B4D_Quicksand_Medium,
                                    {
                                        //backgroundColor: 'red', 


                                    }]}>{item.productName}</Text>
                                <Text style={
                                    [STYLES.fontSize12_4A4B4D_Quicksand_Medium,
                                    {
                                        //backgroundColor: 'red', 


                                    }]}>{item.brandName}</Text>
                            </View>



                            <ButtonDetail onPress={() => {
                                navigation.navigate("AddToCart", {
                                    item
                                })
                            }} />
                        </View>

                    )
                }}
                keyExtractor={(item) => item.id}

            />

        </View >
    );
};


export default Products;