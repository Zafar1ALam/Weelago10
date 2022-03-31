
import React from 'react';
import PropTypes from 'prop-types';
import STYLES from '../STYLES';
import { ScrollView, TextInput, View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import TextInput1 from '../components/TextInput1';
import Button1 from '../components/Button1';
import { TouchableRipple } from 'react-native-paper';

const SignUp = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={STYLES.container}>
                <View style={{ //backgroundColor: 'red',
                    alignItems: 'center'
                }}>
                    <SvgXml xml={Svgs.logo} />
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'space-between'
                }}>
                    <View style={{ marginTop: '5%' }}>
                        <TextInput1 xml={Svgs.profileLogo} placeholder="Username" />
                    </View>
                    <View style={{}}>
                        <TextInput1 xml={Svgs.profileLogo} placeholder="Email" />
                    </View>
                    <View style={{}}>
                        <TextInput1 xml={Svgs.password} placeholder="password" />
                    </View>
                    <View style={{}}>
                        <TextInput1 xml={Svgs.password} placeholder="Phone No" />
                    </View>

                    <View style={{ marginTop: '3%' }}>
                        <Button1 text="SIGNUP" onPress={() => { navigation.navigate("AccountCreated") }} />
                    </View>

                    <TouchableRipple style={{


                    }} onPress={() => { navigation.navigate("Login") }}>
                        <Text style={[STYLES.fontSize15_1C1A1A_Quicksand_Bold,
                            , { alignSelf: 'center' }]}>Don't have an account? Login</Text>
                    </TouchableRipple>
                    <Text style={[STYLES.fontSize15_707070_Quicksand_Bold,
                        , { alignSelf: 'center' }]}>OR</Text>
                    <Text style={[STYLES.fontSize14_1C1A1A_Quicksand_Bold,
                        , { alignSelf: 'center' }]}>Login with Social Networks</Text>
                    <SvgXml xml={Svgs.google} style={{
                        alignSelf: 'center',
                        marginBottom: '5%'
                    }} />
                </View>
            </View>
        </ScrollView >
    );
};

SignUp.propTypes = {

};

export default SignUp;