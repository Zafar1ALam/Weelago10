

import React from 'react';
import PropTypes from 'prop-types';
import STYLES from '../STYLES';
import { ScrollView, TextInput, View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import TextInput1 from '../components/TextInput1';
import Button1 from '../components/Button1';
import { TouchableRipple } from 'react-native-paper';

const ResetPassword = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={STYLES.container}>
                <TouchableRipple onPress={() => { navigation.goBack() }}
                    style={{
                        marginTop: '5%',
                        marginLeft: '-7%',
                        // backgroundColor: 'green',
                        alignSelf: 'flex-start'
                    }}>
                    <SvgXml xml={Svgs.goBackScreenSvg}
                    />
                </TouchableRipple>
                <View style={{
                    //backgroundColor: 'green',

                    alignItems: 'center'
                }}>
                    <SvgXml xml={Svgs.logo} />
                </View>
                <View style={{
                    flex: 1,// backgroundColor: 'green',
                    alignItems: 'center'

                }}>
                    <Text style={STYLES.fontSize21_1C1A1A_Quicksand_Bold}>Reset Password?</Text>
                    <View style={{ marginTop: '15%', alignSelf: 'stretch' }}>
                        <TextInput1
                            xml={Svgs.profileLogo}
                            placeholder="New Password"
                            secureTextEntry={true} />
                    </View>
                    <View style={{ marginTop: '10%', alignSelf: 'stretch' }}>
                        <TextInput1 xml={Svgs.profileLogo}
                            placeholder="Confirm New Password"
                            secureTextEntry={true} />
                    </View>

                </View>
                <View style={{ marginBottom: '10%' }}>
                    <Button1 text="CONTINUE" onPress={() => { navigation.navigate("Login") }} />
                </View>

            </View>
        </ScrollView >
    );
};

ResetPassword.propTypes = {

};

export default ResetPassword;