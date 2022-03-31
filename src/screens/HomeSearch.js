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

const HomeSearch = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    const DATA = [
        {
            id: 1,
            productName: "Product Name here",
            brandName: "Brand Name here",
            categoryName: "Category Name here",
        },
        {
            id: 2,
            productName: "Product Name here",
            brandName: "Brand Name here",
            categoryName: "Category Name here",
        },
        {
            id: 3,
            productName: "Product Name here",
            brandName: "Brand Name here",
            categoryName: "Category Name here",
        },
        {
            id: 4,
            productName: "Product Name here",
            brandName: "Brand Name here",
            categoryName: "Category Name here",
        },
        {
            id: 5,
            productName: "Product Name here",
            brandName: "Brand Name here",
            categoryName: "Category Name here",
        },
        {
            id: 6,
            productName: "Product Name here",
            brandName: "Brand Name here",
            categoryName: "Category Name here",
        },
        {
            id: 7,
            productName: "Product Name here",
            brandName: "Brand Name here",
            categoryName: "Category Name here",
        },
    ];
    return (
        <View style={STYLES.container_PH5_PV5}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={STYLES.fontSize25_4A4B4D_Quicksand_Bold}>Search</Text>

                <TouchableRipple onPress={() => console.log('j')}>
                    <SvgXml xml={Svgs.cartLogo} />
                </TouchableRipple>
            </View>
            <View style={{
                flexDirection: 'row', marginTop: '5%',
                backgroundColor: COLORS.lightredF2F2F2,
                paddingHorizontal: '5%',
                //paddingVertical: '4%',
                borderRadius: 28, alignItems: 'center'
            }}>
                <SvgXml xml={Svgs.searchIcon} />

                <TextInput placeholder='Type Products' style={{
                    flex: 1, height: 50,
                    marginLeft: '5%',
                    // backgroundColor: 'red'
                }} />

            </View>
            <Text style={[STYLES.fontSize17_4A4B4D_Quicksand_Bold,
            { marginTop: '5%' }]}>Search by:</Text>
            <View style={{
                flexDirection: 'row', alignItems: 'center',
                justifyContent: 'center',
                marginTop: '2%'//backgroundColor: 'red'
            }}>
                <RadioButton color={COLORS.radicalRed}
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                />
                <Text style={[STYLES.fontSize17_4A4B4D_Quicksand_Bold,
                { marginRight: '10%' }]}>Name</Text>
                <RadioButton color={COLORS.radicalRed}
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                />
                <Text style={STYLES.fontSize17_4A4B4D_Quicksand_Bold}>Brands</Text>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginTop: '5%' }}
                data={DATA}
                renderItem={({ item }) => {
                    return (

                        <View style={{
                            height: 80,
                            // paddingVertical: '5%',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginBottom: '5%'
                        }}>
                            <View style={{
                                borderWidth: 1,
                                borderColor: COLORS.SunshadeFF9643,
                                // paddingVertical: '5%',
                                //paddingHorizontal: '7%',
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image
                                    resizeMode='contain'
                                    style={{

                                        marginVertical: '1%',
                                        marginHorizontal: '2%'
                                    }} source={require('../utilities/images/categoryName.png')} />
                            </View>
                            <View style={{
                                justifyContent: 'space-evenly',
                                marginLeft: '5%',// backgroundColor: 'red',
                                flex: 1
                            }}>
                                <Text style={STYLES.fontSize18_4A4B4D_Quicksand_Medium}>{item.productName}</Text>
                                <Text style={STYLES.fontSize12_4A4B4D_Quicksand_Medium}>{item.brandName}</Text>
                                <Text style={STYLES.fontSize12_4A4B4D_Quicksand_Medium}>{item.categoryName}</Text>
                            </View>
                            <ButtonDetail />
                        </View>

                    )
                }}
                keyExtractor={(item) => item.id}

            />

        </View>
    );
};

HomeSearch.propTypes = {

};

export default HomeSearch;