import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions, FlatList, Image,
    StatusBar,
    ScrollView, Text, TextInput, View
} from 'react-native';
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
// import cc from '../Context';
// import { ccValue } from '../Context'
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from './src/actions/counts';
const AddToCart = ({ route, navigation }) => {
    const { item } = route.params;
    //   console.log(item)
    const [stateBtnCheck, setStateBtnCheck] = useState(true)
    const fetchRedux = useSelector(
        state => state.countReducer.a
    )
    useEffect(() => {

        fetchRedux.find(a => {
            if (a.id == item.id) {
                setStateBtnCheck(false)
            }

            console.log(a.id)
        })
    }, [])


    const addToCart = () => {

        // fetchRedux = fetchRedux
        fetchRedux.push(item)
        console.log(fetchRedux)

        setStateBtnCheck(false)


        navigation.navigate("Cart")

    }
    return (

        <View style={
            {
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
                flex: 1,

                backgroundColor: COLORS.whiteFFFFFF,
            }}
        >
            {/* <cc.Provider //</View>value={stateCart, setStateCart, a} 
                value={{ stateCart: stateCart }}> */}


            <StatusBar

                backgroundColor={COLORS.shockingPink}
            />
            <View style={{
                flex: 0.1,
                flexDirection: 'row',

                paddingHorizontal: '7%',
                alignItems: 'center',

                borderBottomEndRadius: 30,
                borderBottomLeftRadius: 30,
                justifyContent: 'space-between',
                backgroundColor: COLORS.shockingPink
            }}>
                <TouchableRipple onPress={() => navigation.goBack()}
                >
                    <SvgXml xml={Svgs.goBackScreenSvgWhite} />
                </TouchableRipple>
                <SvgXml xml={Svgs.cartLogoWhite} />
            </View>
            <View style={{ flex: 0.35 }}>
                <Image style={{ flex: 1 }}

                    source={require('../utilities/images/addToCartImage.png')} />

            </View>
            <View style={{
                flex: 0.15,
                paddingHorizontal: '5%',
                marginTop: '5%',
                justifyContent: 'space-evenly',// backgroundColor: 'red'
            }}>
                <View style={{
                    flexDirection: 'row',// marginTop: '5%',
                    justifyContent: 'space-between'
                }}>

                    <Text style={STYLES.fontSize22_4A4B4D_Quicksand_Bold}>{item.productName}</Text>
                    <SvgXml xml={Svgs.heartSvg} />
                </View>
                <Text style={[STYLES.fontSize14_4A4B4D_Quicksand_Bold,
                {}]}>{item.brandName}</Text>
                <View style={{
                    flexDirection: 'row', //marginTop: '5%',
                    justifyContent: 'space-between', //backgroundColor: 'red',
                    alignItems: 'center', paddingBottom: '5%'
                }}>

                    <Text style={STYLES.fontSize21_4A4B4D_Quicksand_Bold}>
                        Description
                    </Text>
                    <Text style={STYLES.fontSize31_4A4B4D_Quicksand_Bold}>$ {item.productPrice}</Text>
                </View>
            </View>

            <View style={{
                flex: 0.4,// backgroundColor: 'red',
                justifyContent: 'space-between',
                paddingHorizontal: '5%',
            }}>
                <Text
                    numberOfLines={10}
                    style={STYLES.fontSize12_7C7D7E_Metropolis_Regular}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare leo non mollis id cursus. Eu euismod faucibus in leo malesuadaLorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare leo non mollis id cursus. Eu euismod faucibus in leo malesuadaLorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare leo non mollis id cursus. Eu euismod faucibus in leo malesuadaLorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare leo non mollis id cursus. Eu euismod faucibus in leo malesuadaLorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare leo non mollis id cursus. Eu euismod faucibus in leo malesuada</Text>
                <View>
                    {/* <cc.Provider value={stateCart} > */}

                    {stateBtnCheck ?
                        <TouchableRipple style={{
                            borderRadius: 20,
                            backgroundColor: COLORS.pinkF814C0,
                            //paddingVertical: "6%",
                            height: 55,
                            //  width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center', flexDirection: 'row',
                            marginBottom: '7%'
                        }} onPress={() => addToCart()}
                        >
                            <>

                                <SvgXml xml={Svgs.cartLogoWhite} />
                                <Text style={[{ marginLeft: '5%' }, STYLES.fontSize20_FFFFFF_Quicksand_Bold]}>
                                    ADD TO CART
                                </Text>

                            </>
                        </TouchableRipple>
                        : null}

                </View>
            </View>
            {/* </cc.Provider> */}
        </View >
    );
};

AddToCart.propTypes = {

};

export default AddToCart;