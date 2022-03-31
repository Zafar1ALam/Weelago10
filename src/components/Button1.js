import React from 'react';
import {
    View, Text, ImageBackground,
    Image, Dimensions, TouchableOpacity
} from 'react-native'
import STYLES from '../STYLES'
import { TouchableRipple } from 'react-native-paper';
import COLORS from '../utilities/colors/Color';

const Button1 = props => {
    return (
        <TouchableRipple style={{
            borderRadius: 20,
            backgroundColor: COLORS.pinkF814C0,
            //paddingVertical: "6%",
            height: 55,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        }} rippleColor={COLORS.pinkF814C0}
            onPress={props.onPress}>
            <Text style={STYLES.fontSize20_FFFFFF_Quicksand_Bold}>
                {props.text}
            </Text>
        </TouchableRipple>
    );
};



export default Button1;