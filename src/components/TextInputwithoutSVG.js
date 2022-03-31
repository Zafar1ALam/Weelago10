import * as React from 'react';
import STYLES from '../STYLES'
import COLORS from '../utilities/colors/Color';
import { TextInput } from 'react-native';

const TextInputwithoutSVG = props => {

    return (
        <TextInput


            style={[STYLES.fontSize14_B6B7B7_Metropolis_Regular,
            {

                borderRadius: 28,

                //  height: 60, 
                backgroundColor: COLORS.lightredF2F2F2
                //backgroundColor: 'red'
            }, { paddingLeft: props.paddingLeft }]}



            placeholder={props.placeholder}

            onChangeText={props.onChangeText}

        />
    );
};

TextInputwithoutSVG.propTypes = {

};

export default TextInputwithoutSVG;