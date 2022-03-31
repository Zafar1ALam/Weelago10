import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View } from 'react-native';
import COLORS from '../utilities/colors/Color';
import { SvgXml } from 'react-native-svg';
import STYLES from '../STYLES';
import { TouchableRipple } from 'react-native-paper';


const LeftInputRightSvg = props => {
    return (
        <>
            <Text style={STYLES.fontSize14_1D22226_50_Raleway_Regular}
            >{props.text}</Text>
            <View style={{
                // borderRadius: 26, 
                // borderColor: COLORS.black1A1A1A,
                flexDirection: 'row', //paddingHorizontal: '4%',
                alignItems: 'center',// width: '100%',
                // backgroundColor: 'red',
                borderBottomWidth: 1,
                marginBottom: '4%'
            }}>

                <TextInput placeholder={props.placeholder}
                    editable={props.editable}
                    value={props.value}
                    keyboardType={props.keyboardType}
                    secureTextEntry={props.secureTextEntry}
                    // secureTextEntry={props.secureTextEntry}
                    style={[{
                        flex: 1,

                        // width: '100%',
                        //  backgroundColor: 'orange',
                        // height: 30,
                        //   backgroundColor: 'red'
                    }, STYLES.fontSize15_707070_Quicksand_Bold
                    ]}
                    //  onPressIn={props.onPress}
                    onChangeText={props.onChangeText}
                    keyboardType={props.keyboardType}
                />
                <TouchableRipple onPress={props.onPress}>
                    <SvgXml xml={props.xml} />
                </TouchableRipple>
            </View>
        </>
    );
};


export default LeftInputRightSvg;