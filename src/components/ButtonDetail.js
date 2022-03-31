import React from 'react';
import PropTypes from 'prop-types';
import { TouchableRipple } from 'react-native-paper';
import { Text } from 'react-native';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';

const ButtonDetail = props => {
    return (
        <TouchableRipple style={{
            backgroundColor: COLORS.redFD2A5A,
            paddingHorizontal: '3%',
            paddingVertical: '2%',
            borderRadius: 25
        }}
            rippleColor={COLORS.redFD2A5A}
            onPress={props.onPress}>
            <Text style={STYLES.fontSize10_FFFFFF_Quicksand_Medium}>DETAIL</Text>

        </TouchableRipple>
    );
};

ButtonDetail.propTypes = {

};

export default ButtonDetail;