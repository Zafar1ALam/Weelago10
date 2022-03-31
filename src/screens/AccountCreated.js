
import React from 'react';
import PropTypes from 'prop-types';
import STYLES from '../STYLES';
import { ScrollView, TextInput, View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import TextInput1 from '../components/TextInput1';
import Button1 from '../components/Button1';
import { TouchableRipple } from 'react-native-paper';

const AccountCreated = ({ navigation }) => {
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
                    //  backgroundColor: 'green',
                    // paddingVertical: '-10%',
                    alignItems: 'center'
                }}>
                    <SvgXml xml={Svgs.accountCreatedLogo} />
                </View>
                <View style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center',// backgroundColor: 'red'
                }}>

                    <View style={{
                        //    backgroundColor: 'green', 
                        alignItems: 'center',
                        justifyContent: 'center', marginBottom: '30%'
                    }}>
                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114">
  <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M114.563,57.563a57,57,0,1,1-57-57A57,57,0,0,1,114.563,57.563ZM50.969,87.744l42.29-42.29a3.677,3.677,0,0,0,0-5.2l-5.2-5.2a3.677,3.677,0,0,0-5.2,0L48.369,69.541l-16.1-16.1a3.678,3.678,0,0,0-5.2,0l-5.2,5.2a3.677,3.677,0,0,0,0,5.2l23.9,23.9a3.678,3.678,0,0,0,5.2,0Z" transform="translate(-0.563 -0.563)" fill="#3dc3e6"/>
</svg>
`} />
                        <Text style={[{
                            marginTop: '5%',// backgroundColor: 'red'
                        }, STYLES.fontSize21_1C1A1A_Quicksand_Bold]}>Account Created</Text>
                    </View>

                </View>

                <View style={{ marginBottom: '10%' }}>
                    <Button1 text="BACK TO HOME"
                        onPress={() => { navigation.navigate("TabNavigations") }}
                    />
                </View>

            </View>
        </ScrollView >
    );
};

AccountCreated.propTypes = {

};

export default AccountCreated;