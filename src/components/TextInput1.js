import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';
import COLORS from '../utilities/colors/Color';
import { SvgXml } from 'react-native-svg';
import STYLES from '../STYLES';


const TextInput1 = props => {
    return (
        <View style={{
            borderRadius: 26, borderWidth: 1,
            borderColor: COLORS.black1A1A1A,
            flexDirection: 'row', paddingHorizontal: '4%',
            alignItems: 'center',// width: '100%',
            // backgroundColor: 'red',

        }}>
            <SvgXml xml={props.xml} />
            <TextInput placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                style={[{
                    flex: 1,
                    // width: '100%',
                    //  backgroundColor: 'orange',
                    marginLeft: '2%', height: 50,
                    //   backgroundColor: 'red'
                }, STYLES.fontSize15_707070_Quicksand_Bold
                ]}

                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
            />
            {/* <TouchableOpacity>
               
            </TouchableOpacity> */}
        </View>
    );
};

TextInput1.propTypes = {

};

export default TextInput1;