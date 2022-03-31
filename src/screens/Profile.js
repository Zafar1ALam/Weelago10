
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions, FlatList, Image,

    TouchableOpacity,
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
import ButtonSeeProducts from '../components/ButtonSeeProducts';
import ButtonOrderHistory from '../components/ButtonOrderHistory';
import leftInputRightSvg from '../components/LeftInputRightSvg';
import LeftInputRightSvg from '../components/LeftInputRightSvg';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BtnFS16 from '../components/BtnFS16';
const Profile = ({ navigation }) => {
    const refRBSheetCamera = useRef();
    const [stateImage, setStateImage] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [stateDate, setStateDate] = useState()


    const imageTakeFromCamera = () => {
        refRBSheetCamera.current.close()
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setStateImage(image.path)
            console.log(image.path);
            console.log(image);


        });
    }

    const imageTakeFromGallery = () => {
        refRBSheetCamera.current.close()
        console.log('gg')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setStateImage(image.path)
        });
    }
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        //    console.log(typeof (date))

        //  console.log(typeof (stringDate))
        var d = new Date();
        d = date
        console.log(d)
        //console.log(d)
        console.log(d.getDate() + "-" +
            (d.getMonth() + 1) + "-" +
            d.getFullYear())
        setStateDate(d.getDate() + "-" +
            (d.getMonth() + 1) + "-" +
            d.getFullYear())




        hideDatePicker();
    };
    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={STYLES.container_PH5_PV5}
            >
                <View style={{
                    //  flex: 0.25,// backgroundColor: 'red',
                    justifyContent: 'space-between'
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={STYLES.fontSize25_4A4B4D_Quicksand_Bold}>
                            Profile</Text>

                        <ButtonOrderHistory onPress={() => navigation.navigate("OrderHistory")} />
                    </View>
                    <View style={{ alignItems: 'center', marginTop: '5%' }}>
                        {stateImage === null ? <TouchableRipple onPress={() => refRBSheetCamera.current.open()}
                        >
                            <SvgXml xml={Svgs.profileCameraLogo} />
                        </TouchableRipple>
                            :
                            <Image style={{ height: 88, width: 88, borderRadius: 50, }}
                                resizeMode='cover'
                                source={{ uri: stateImage }} />

                        }
                        <TouchableRipple style={{
                            borderRadius: 100,
                            marginTop: '3%',
                            paddingVertical: "1%",
                            paddingHorizontal: '1%',
                            backgroundColor: COLORS.shadeOfGray
                        }} onPress={() => refRBSheetCamera.current.open()}>
                            <Text style={STYLES.fontSize10_FFFFFF_Quicksand_Bold}>ADD PROFILE</Text>
                        </TouchableRipple>
                    </View>

                </View>
                <View style={{
                    marginTop: '4%'
                    // flex: 0.60, //backgroundColor: 'green' 
                }}>
                    <LeftInputRightSvg text="Full Name"
                        placeholder="Full name here" xml={Svgs.profileFullNameLogo} />
                    <LeftInputRightSvg text="Email Address"
                        placeholder="aakashchavan@gmail.com" xml={Svgs.pinkEmailLogo} />
                    <LeftInputRightSvg text="Password"
                        placeholder="*********" xml={Svgs.pinkEyeClose}
                        secureTextEntry={true}
                    />

                    <LeftInputRightSvg text="Date of Birth"
                        value={stateDate}
                        onPress={showDatePicker} editable={false}
                        placeholder="01-01-2001" xml={Svgs.pinkDateOfBirth} />
                    <LeftInputRightSvg text="User ID"
                        placeholder="1111111111" xml={Svgs.pinkUserIdLogo} />
                    <LeftInputRightSvg text="Address"
                        placeholder="this is address " xml={Svgs.pinkAddressLogo} />
                </View>
                <View style={{
                    //  flex: 0.15,
                    //backgroundColor: 'orange',
                    justifyContent: 'center', marginBottom: 15//
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                    }}>
                        <View style={{ width: '40%', }}>
                            <BtnFS16 text="UPDATE" />
                        </View>
                        <View style={{ width: '40%', }}>
                            <BtnFS16 text="LOGOUT" />
                        </View>


                    </View>

                </View>
                {/* date time picker code */}
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />

                {/* bottom sheet of caMERA */}
                <RBSheet
                    closeOnDragDown={false}
                    height={260}
                    animationType="slide"
                    ref={refRBSheetCamera}
                    closeOnDragDown={true}


                >
                    <View style={{
                        justifyContent: 'space-evenly', flex: 1,
                        paddingHorizontal: '5%'
                    }}>
                        <Text style={STYLES.fontSize31_7A7A7A_LouisGeorgeCafé_Bold}>Add Photo! </Text>
                        <TouchableOpacity onPress={() => { imageTakeFromCamera() }}>
                            <Text style={STYLES.fontSize20_7A7A7A_Roboto_Regular_60}>
                                Take Photo Camera </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { imageTakeFromGallery() }}>
                            <Text style={STYLES.fontSize20_7A7A7A_Roboto_Regular_60}>
                                Take Photo Gallery </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => refRBSheetCamera.current.close()}>
                            <Text style={STYLES.fontSize20_7A7A7A_Roboto_Regular_60}>Cancel </Text>
                        </TouchableOpacity>
                    </View>
                </RBSheet>


            </View>
        </ScrollView>

    );
};

Profile.propTypes = {

};

export default Profile;