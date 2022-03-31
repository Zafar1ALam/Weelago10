import React from 'react';
import PropTypes from 'prop-types';
import { TouchableRipple } from 'react-native-paper';
import { Text } from 'react-native';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';

const BtnFS16 = props => {
    return (
        <TouchableRipple style={{
            backgroundColor: COLORS.pinkF814C0,
            // paddingHorizontal: '3%',
            paddingVertical: '10%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16
        }} rippleColor={COLORS.pinkF814C0}>
            <Text style={STYLES.fontSize16_FFFFFF_Quicksand_Bold}>{props.text}</Text>

        </TouchableRipple>
    );
};

BtnFS16.propTypes = {

};

export default BtnFS16;