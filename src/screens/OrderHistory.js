import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, FlatList, Image, ScrollView, StatusBar, Text, TextInput, View } from 'react-native';
import Svg, { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import STYLES from '../STYLES';
import { TouchableRipple, RadioButton } from 'react-native-paper';
import COLORS from '../utilities/colors/Color';
import TextInput1 from '../components/TextInput1';
import { SliderBox } from "react-native-image-slider-box";
import ButtonSeeAll from '../components/ButtonSeeAll';
import ButtonDetail from '../components/ButtonDetail';
import Button1 from '../components/Button1';

const OrderHistory = props => {
    const [flatListOrderHistory, setFlatListOrderHiatory] = useState([{
        id: 1,
        orderno: "#1234556",
        subtotal: 1000

    },
    {
        id: 2,
        orderno: "#1234556",
        subtotal: 1000


    },

    {
        id: 3,
        orderno: "#1234556",
        subtotal: 1000

    },
    {
        id: 4,
        orderno: "#1234556",
        subtotal: 1000


    },
    {
        id: 5,
        orderno: "#1234556",
        subtotal: 1000

    },
    {
        id: 6,
        orderno: "#1234556",
        subtotal: 1000


    },
    {
        id: 7,
        orderno: "#1234556",
        subtotal: 1000

    },
    {
        id: 8,
        orderno: "#1234556",
        subtotal: 1000


    },
    ])

    return (
        <View style={STYLES.container_PH5_PV5}>
            <View style={{ flex: 0.07 }}>
                <Text style={
                    STYLES.fontSize23_4A4B4D_Quicksand_Bold

                }>Order History</Text>
            </View>
            <View style={{
                flex: 0.93,// backgroundColor: 'red'
            }}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={flatListOrderHistory}
                    renderItem={({ item }) => {
                        console.log(item.userName)
                        console.log(item.id)
                        return (
                            <View style={{
                                backgroundColor: COLORS.whiteFFFFFF,
                                borderRadius: 14,
                                paddingHorizontal: '4%',
                                height: 80,
                                marginBottom: '3%',
                                borderColor: COLORS.grey707070_32,
                                borderWidth: 1,
                                justifyContent: 'space-evenly'
                            }} >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={STYLES.fontSize18_4A4B4D_Raleway_Bold}>Order No:</Text>
                                    <Text style={STYLES.fontSize18_4A4B4D_Raleway_Bold}>{item.orderno}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={STYLES.fontSize18_4A4B4D_Raleway_Bold_52}>Subtotal</Text>
                                    <Text style={STYLES.fontSize18_4A4B4D_Raleway_Bold_52}>{item.subtotal}</Text>
                                </View>


                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.id}


                />


            </View>

        </View>
    );
};

OrderHistory.propTypes = {

};

export default OrderHistory;