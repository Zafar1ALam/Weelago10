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
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../redux/actions/counts';

import cc from '../Context'

const Cart = ({ navigation }) => {
    //var fetchRedux;
    // useEffect(() => {
    //     //fetchRedux

    // },[stateSubTotal])

    useEffect(() => {

        fetchRedux.map((obj, index) => {
            stateSubTotal = stateSubTotal + (obj.productPrice * obj.productQuantity)

        })
        setTimeout(() => {
            setStateSubTotal(stateSubTotal)
            console.log(stateSubTotal)
        }, 1000)

    }, [])
    const [productFlatlist, setProductFlatlist] = useState([
        {
            id: 1,
            image: "Title Here",
            productName: "Title Here",
            productPrice: "$ 100",
            productQuantity: 1
        },

        {
            id: 2,
            image: "Title Here",
            productName: "Title Here",
            productPrice: "$ 100",
            productQuantity: 1
        },
        {
            id: 3,
            image: "Title Here",
            productName: "Title Here",
            productPrice: "$ 100",
            productQuantity: 1

        },
        {
            id: 4,
            image: "Title Here",
            productName: "Title Here",
            productPrice: "$ 100",
            productQuantity: 1
        },
        {
            id: 5,
            image: "Title Here",
            productName: "Title Here",
            productPrice: "$ 100",
            productQuantity: 1
        },
        {
            id: 6,
            image: "Title Here",
            productName: "Title Here",
            productPrice: "$ 100",
            productQuantity: 1
        },
        {
            id: 7,
            image: "Title Here",
            productName: "Title Here",
            productPrice: "$ 100",
            productQuantity: 1
        },
        {
            id: 8,
            image: "Title Here",
            productName: "Title Here",
            productPrice: "$ 100",
            productQuantity: 1
        },
        {
            id: 9,
            image: "Title Here",
            productName: "Title Here",
            productPrice: "$ 100",
            productQuantity: 1
        },
        {
            id: 10,
            image: "Title Here",
            productName: "Title Here",
            productPrice: "$ 100",
            productQuantity: 1
        },
    ]);
    var [stateSubTotal, setStateSubTotal] = useState(0)
    const [stateDummy, setStateDummy] = useState(0)

    const fetchRedux = useSelector(
        state => state.countReducer.a

    )
    //  console.log(subTotal)
    // setStateSubTotal(a)
    console.log(fetchRedux)
    const dispatch = useDispatch();
    return (
        <ScrollView>

            <View style={{
                flex: 1, paddingHorizontal: '5%',
                paddingVertical: '5%',
                //  backgroundColor: 'red'
                backgroundColor: COLORS.whiteFFFFFF
            }}>
                <StatusBar
                    hidden={true}
                    backgroundColor={COLORS.whiteFFFFFF}
                />
                <Text style={STYLES.fontSize28_4A4B4D_Quicksand_Bold}>My Cart</Text>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{
                        marginTop: '7%', marginRight: '-3%'
                    }}
                    data={fetchRedux}
                    renderItem={({ item }) => {
                        return (

                            <View style={{
                                //    height: 150,
                                // paddingVertical: '5%',
                                //marginRight: -20,
                                //   backgroundColor: 'green',
                                //justifyContent: 'space-between',
                                marginBottom: '7%',
                                paddingBottom: '7%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderBottomWidth: 1,
                                borderBottomColor: COLORS.grey707070_32
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
                                <View style={{ flex: 1 }}>
                                    <View style={{
                                        flex: 1,
                                        // backgroundColor: 'green',
                                        marginLeft: '3%',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Text style={
                                            [STYLES.fontSize18_4A4B4D_Raleway_Bold,
                                            {
                                                //backgroundColor: 'red', 


                                            }]}>{item.productName}</Text>
                                        <TouchableRipple
                                            onPress={() => {

                                                var index;
                                                fetchRedux.map((value, i) => {

                                                    if (value.id == item.id) {
                                                        // console.log(i)
                                                        // console.log(value)
                                                        index = i;
                                                    }

                                                })

                                                if (index > -1) {
                                                    fetchRedux.splice(index, 1);
                                                    //  dispatch(addCart(fetchRedux))
                                                }
                                                // console.log(index)
                                                setStateDummy(stateDummy + 1)
                                            }}>

                                            <SvgXml xml={Svgs.crossRed} />
                                        </TouchableRipple>

                                    </View>
                                    <View style={{
                                        flex: 1,
                                        // backgroundColor: 'green',
                                        marginLeft: '3%',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Text style={
                                            [STYLES.fontSize18_4A4B4D_Raleway_Bold,
                                            {
                                                //backgroundColor: 'red', 


                                            }]}>{item.productPrice}</Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            //  backgroundColor: 'red',
                                            // alignItems: 'baseline',
                                            flex: 0.5, justifyContent: 'space-between'
                                        }}>
                                            <TouchableRipple onPress={() => {
                                                if (productFlatlist.find(o => o.id === item.id)) {
                                                    item.productQuantity = item.productQuantity + 1
                                                    //  console.log(item.productQuantity)
                                                }
                                                stateSubTotal = stateSubTotal + item.productPrice

                                                setStateSubTotal(stateSubTotal)
                                                // setStateDummy(stateDummy + 1)
                                            }}>
                                                <SvgXml xml={Svgs.plusGrey} />
                                            </TouchableRipple>
                                            <View style={{
                                                // width: 38.02,
                                                // height: 18.85,
                                                borderRadius: 100,
                                                justifyContent: 'flex-start',
                                                // alignItems: 'center',
                                                // justifyContent: 'center',
                                                paddingHorizontal: '20%',
                                                paddingVertical: '4%',
                                                backgroundColor: COLORS.shockingPink
                                            }}>

                                                <Text style={[STYLES.fontSize15_FFFFFF_Raleway_Bold,
                                                {
                                                    // backgroundColor: 'green',
                                                    textAlignVertical: 'center',
                                                    alignSelf: 'center'
                                                }]}>{item.productQuantity}</Text>
                                            </View>
                                            {item.productQuantity == 0 ?
                                                <View style={{ marginRight: 20 }}>


                                                </View>
                                                : <TouchableRipple onPress={() => {
                                                    if (productFlatlist.find(o => o.id === item.id))
                                                        item.productQuantity = item.productQuantity - 1
                                                    stateSubTotal = stateSubTotal - item.productPrice

                                                    setStateSubTotal(stateSubTotal)
                                                }}>
                                                    <SvgXml xml={Svgs.minusGrey}
                                                    />
                                                </TouchableRipple>}

                                        </View>

                                    </View>
                                </View>



                            </View>

                        )
                    }}
                    keyExtractor={(item) => item.id}
                />

                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.grey707070_50
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={STYLES.fontSize22_4A4B4D_Quicksand_Bold}>Shipping Cost </Text>
                        <Text style={STYLES.fontSize22_4A4B4D_Quicksand_Bold}> 500 $ </Text>
                    </View>
                    <Text style={STYLES.fontSize14_707070_Segoe_UI_Regular}>(R 500 Per Product) </Text>
                    <View style={{
                        flexDirection: 'row',
                        marginBottom: '20%',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize22_4A4B4D_Quicksand_Bold}>Subtotal</Text>
                        <Text style={STYLES.fontSize22_4A4B4D_Quicksand_Bold}>{stateSubTotal} $ </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        // marginBottom: '20%',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize14_1D22226_50_Raleway_Regular}>Add Notes for Driver</Text>
                        <SvgXml xml='<svg xmlns="http://www.w3.org/2000/svg" width="11.956" height="11.956" viewBox="0 0 11.956 11.956">
  <path id="Icon_awesome-sticky-note" data-name="Icon awesome-sticky-note" d="M8.326,9.936h3.629V2.89a.639.639,0,0,0-.64-.64H.64A.639.639,0,0,0,0,2.89V13.565a.639.639,0,0,0,.64.64H7.686V10.576A.642.642,0,0,1,8.326,9.936ZM11.769,11.4,9.154,14.019a.64.64,0,0,1-.454.187H8.54V10.79h3.416v.163A.638.638,0,0,1,11.769,11.4Z" transform="translate(0 -2.25)" fill="#f815b8"/>
</svg>
'/>
                    </View>
                    <Text style={[STYLES.fontSize14_1D2226_Quicksand_Bold,
                    { marginBottom: '20%', marginTop: '2%' }]}>(Optional)</Text>

                </View>
                <View style={{ marginTop: '10%' }}>
                    <Button1 text="CONTINUE" onPress={() => { navigation.navigate("AccountCreated") }} />
                </View>
            </View>
        </ScrollView >

    );
};

Cart.propTypes = {

};

export default Cart;