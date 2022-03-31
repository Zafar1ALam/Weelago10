import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, FlatList, Image, ScrollView, Text, TextInput, View } from 'react-native';
import Svg, { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import STYLES from '../STYLES';
import { TouchableRipple } from 'react-native-paper';
import COLORS from '../utilities/colors/Color';
import TextInput1 from '../components/TextInput1';
import { SliderBox } from "react-native-image-slider-box";
import ButtonSeeAll from '../components/ButtonSeeAll';

const Home = ({ navigation }) => {
    const [stateImageSlider, setStateImageSlider] = useState({
        images: [

            require('../utilities/images/sliderImage1.png'),
            require('../utilities/images/sliderImage1.png'),
            require('../utilities/images/sliderImage1.png'),
            require('../utilities/images/sliderImage1.png'),          // Local image
        ]
    });

    const [categoryFlatlist, setCategoryFlatlist] = useState([
        {
            id: 1,
            productName: "Product Name",
            brandName: "Brand Name",
            categoryName: "Category Name",
            quantityName: 1
        },
        {
            id: 2,
            productName: "Product Name",
            brandName: "Brand Name",
            quantityName: 1,
            categoryName: "Category Name",
        },
        {
            id: 3,
            productName: "Product Name",
            brandName: "Brand Name",
            categoryName: "Category Name",
            quantityName: 1
        },
        {
            id: 4,
            productName: "Product Name",
            brandName: "Brand Name",
            categoryName: "Category Name",
            quantityName: 1
        },
        {
            id: 5,
            productName: "Product Name",
            brandName: "Brand Name",
            categoryName: "Category Name",
            quantityName: 1
        }, {
            id: 6,
            productName: "Product Name",
            brandName: "Brand Name",
            categoryName: "Category Name",
            quantityName: 1
        }])


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
        <ScrollView>
            <View style={{
                flex: 1, backgroundColor: COLORS.whiteFFFFFF,
                paddingHorizontal: '5%', paddingVertical: '5%'
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={STYLES.fontSize23_4A4B4D_Quicksand_Bold}>Good morning Jhon</Text>

                    <TouchableRipple onPress={() => console.log('j')}>
                        <SvgXml xml={Svgs.cartLogo} />
                    </TouchableRipple>
                </View>
                <TouchableRipple style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    //backgroundColor: 'green',
                    width: '60%', alignItems: 'center', marginTop: '3%'
                }} onPress={() => console.log('k')}>
                    <>
                        <Text style={STYLES.fontSize18_7C7D7E_Quicksand_Bold}>Current Location</Text>


                        <SvgXml xml={Svgs.downArrow} />
                    </>
                </TouchableRipple>

                <TouchableRipple style={{
                    flexDirection: 'row', marginTop: '5%',
                    backgroundColor: COLORS.lightredF2F2F2,
                    paddingHorizontal: '5%',
                    //paddingVertical: '4%',
                    borderRadius: 28, alignItems: 'center'
                }} onPress={() => { navigation.navigate("HomeSearch") }}>
                    <>
                        <SvgXml xml={Svgs.searchIcon} />

                        <TextInput
                            editable={false}
                            placeholder='Search' style={{
                                flex: 1, height: 50,
                                marginLeft: '5%',
                                // backgroundColor: 'red'
                            }} />
                    </>
                </TouchableRipple>

                <View style={{
                    //sbackgroundColor: 'red',
                    // width: '100%',
                    // marginTop: '5%',
                    paddingVertical: '5%',
                    paddingBottom: '10%',// paddingHorizontal: '5%'
                }}>
                    <SliderBox

                        resizeMode="cover"

                        ImageComponentStyle={{
                            borderRadius: 14,
                            // width: 400, height: 200,

                            // width: Dimensions.get('window').width,
                            marginHorizontal: '15%'
                        }}
                        images={stateImageSlider.images}
                        sliderBoxHeight={200}
                        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        dotColor={COLORS.radicalRed}
                        inactiveDotColor={COLORS.SilverBDBDBD}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 10,
                            marginHorizontal: -10,
                            padding: 0,
                            backgroundColor: 'green',
                            // marginTop: 30
                        }}
                        paginationBoxStyle={{
                            position: "absolute",
                            bottom: '-20%',
                            padding: 0,

                        }}
                    />
                </View>

                {/* qUICK lINKS */}
                <View style={{
                    // backgroundColor: 'green',
                    marginTop: '5%'
                }}>
                    <Text style={STYLES.fontSize31_4A4B4D_Quicksand_Bold}>Quick Links</Text>

                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        marginTop: '5%', //backgroundColor: 'red'
                    }}>
                        <View style={{
                        }}>
                            <View style={{
                                // backgroundColor: 'green',
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
                                        marginHorizontal: '3%'
                                    }}
                                    source={require('../utilities/images/goMart.png')} />
                            </View>
                            <Text style={[{ textAlign: 'center' },
                            STYLES.fontSize16_4A4B4D_Quicksand_Bold]}>Go mart</Text>
                        </View>
                        <View style={{
                        }}>
                            <View style={{
                                // backgroundColor: 'green',
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
                                        marginVertical: '6%',
                                        marginHorizontal: '4%'
                                    }}
                                    source={require('../utilities/images/venderEShop.png')} />
                            </View>
                            <Text style={[{ textAlign: 'center' },
                            STYLES.fontSize16_4A4B4D_Quicksand_Bold]}>
                                {`Vender  \nE shop`}
                            </Text>
                        </View>
                        <View style={{
                        }}>
                            <View style={{
                                // backgroundColor: 'green',
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
                                        marginHorizontal: '3%'
                                    }}
                                    source={require('../utilities/images/globalCollection.png')} />
                            </View>
                            <Text style={[{ textAlign: 'center' },
                            STYLES.fontSize16_4A4B4D_Quicksand_Bold]}>
                                {`Global \n Collection`}</Text>
                        </View>
                    </View>



                </View>
                {/* cATEGORIES */}

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '5%', alignItems: 'center'
                }}>

                    <Text style={STYLES.fontSize31_4A4B4D_Quicksand_Bold}>Categories</Text>

                    <ButtonSeeAll onPress={() => { navigation.navigate("Category") }} />
                </View>

                <FlatList style={{ marginTop: '5%' }}
                    horizontal={false}
                    numColumns={3}
                    data={categoryFlatlist}
                    renderItem={({ item }) => {
                        return (

                            <TouchableRipple style={{
                                //height: 120,
                                // alignContent: 'space-between'
                                marginRight: '3.3%',
                                marginBottom: '5%', width: '30%',
                                marginBottom: '5%'
                                //  backgroundColor: 'green',
                                //  marginBottom: '15%'
                            }}
                                //rippleColor={COLORS.whiteFFFFFF}
                                onPress={() => { navigation.navigate("Product") }}>
                                <>
                                    <View style={{

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
                                                resizeMode: 'contain',
                                                marginVertical: '10%',
                                            }}
                                            source={require('../utilities/images/categoryName.png')} />
                                    </View>
                                    <Text style={[{ textAlign: 'center' },
                                    STYLES.fontSize16_4A4B4D_Quicksand_Bold]}>{item.categoryName}</Text>
                                </>

                            </TouchableRipple>


                        )
                    }}
                    keyExtractor={(item) => item.id}

                />


                {/* Products */}


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '5%', alignItems: 'center'
                }}>

                    <Text style={STYLES.fontSize31_4A4B4D_Quicksand_Bold}>Products</Text>

                    <ButtonSeeAll onPress={() => { navigation.navigate("Product") }} />
                </View>

                <FlatList style={{ marginTop: '5%' }}
                    horizontal={false}
                    numColumns={3}
                    data={productFlatlist}
                    renderItem={({ item }) => {
                        return (

                            <TouchableRipple style={{
                                //height: 120,
                                // alignContent: 'space-between'
                                marginRight: '3.3%',
                                marginBottom: '5%', width: '30%',
                                // backgroundColor: 'green',
                                //  marginBottom: '15%'
                            }} onPress={() => {
                                navigation.navigate("AddToCart", {
                                    item
                                })
                            }}>
                                <>
                                    <View style={{
                                        width: '100%',
                                        borderWidth: 1,
                                        borderColor: COLORS.SunshadeFF9643,
                                        // paddingVertical: '5%',
                                        // paddingHorizontal: '7%',
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        //  backgroundColor: 'red'

                                    }}>
                                        <Image
                                            style={{
                                                width: '100%',
                                                resizeMode: 'contain',
                                                //   backgroundColor: 'red',
                                                marginVertical: '10%',
                                                //  marginHorizontal: '3%'
                                            }}
                                            source={require('../utilities/images/categoryName.png')} />
                                    </View>
                                    <Text style={[{ textAlign: 'center', },
                                    STYLES.fontSize16_4A4B4D_Quicksand_Bold]}>{item.productName}</Text>
                                </>
                            </TouchableRipple>


                        )
                    }}
                    keyExtractor={(item) => item.id}

                />


            </View>
        </ScrollView >

    );
};

Home.propTypes = {

};

export default Home;