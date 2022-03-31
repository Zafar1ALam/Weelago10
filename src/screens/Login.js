import React from 'react';
import PropTypes from 'prop-types';
import STYLES from '../STYLES';
import { ScrollView, TextInput, View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import TextInput1 from '../components/TextInput1';
import Button1 from '../components/Button1';
import { TouchableRipple } from 'react-native-paper';

const Login = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={STYLES.container}>
                <View style={{
                    flex: 0.3, //backgroundColor: 'red',
                    alignItems: 'center', justifyContent: 'center'
                }}>
                    <SvgXml xml={Svgs.logo} />
                </View>
                <View style={{
                    flex: 0.4,
                    //     backgroundColor: 'green'
                }}>
                    <View style={{ marginTop: '5%' }}>
                        <TextInput1 xml={Svgs.profileLogo}
                            placeholder="Email" />
                    </View>
                    <View style={{ marginTop: '7%' }}>
                        <TextInput1 xml={Svgs.password}
                            placeholder="Password"
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={{ marginTop: '15%' }}>
                        <Button1 text="LOGIN" onPress={() => { navigation.navigate("TabNavigations") }} />
                    </View>
                    <TouchableRipple style={{
                        alignItems: 'flex-end',
                        marginTop: '5%', alignSelf: 'flex-end'
                    }} onPress={() => { navigation.navigate("ForgotPassword") }}>
                        <Text style={STYLES.fontSize12_1C1A1A_Quicksand_Bold} >Forgot Password?</Text>
                    </TouchableRipple>

                </View>
                <View style={{
                    flex: 0.3, //backgroundColor: 'yellow',
                    alignItems: 'center', justifyContent: 'space-evenly'
                }}>
                    <TouchableRipple style={{

                        marginTop: '8%'
                    }} onPress={() => { navigation.navigate("SignUp") }}>
                        <Text style={STYLES.fontSize15_1C1A1A_Quicksand_Bold}>Don't have an account? Sign Up</Text>
                    </TouchableRipple>
                    <Text style={STYLES.fontSize15_707070_Quicksand_Bold}>OR</Text>
                    <Text style={STYLES.fontSize14_1C1A1A_Quicksand_Bold}>Login with Social Networks</Text>
                    <SvgXml xml={Svgs.google} />
                </View>
            </View>
        </ScrollView>
    );
};

Login.propTypes = {

};

export default Login;