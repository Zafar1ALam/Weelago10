import React from 'react';
import PropTypes from 'prop-types';
import { TouchableRipple } from 'react-native-paper';
import { Text } from 'react-native';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';

const ButtonOrderHistory = props => {
    return (
        <TouchableRipple style={{
            backgroundColor: COLORS.redFD2A5A,
            paddingHorizontal: '3%',
            paddingVertical: '2%',
            justifyContent: 'center',
            borderRadius: 25
        }} onPress={props.onPress}
            rippleColor={COLORS.redFD2A5A}>
            <Text style={STYLES.fontSize10_FFFFFF_Quicksand_Bold}>ORDER HISTORY</Text>

        </TouchableRipple>
    );
};



export default ButtonOrderHistory;