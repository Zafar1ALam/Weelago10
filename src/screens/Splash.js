import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground } from 'react-native';
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';


const Splash = ({ navigation }) => {
    const [stateIsVisible, setStateIsVisible] = useState(true)
    useEffect(() => {
        {
            if (!stateIsVisible) {
                navigation.navigate("Login")
            }
            else {
                setTimeout(() => {
                    setStateIsVisible(false)
                }
                    , 4000);
            }
        }

    }, [stateIsVisible])

    return (

        <ImageBackground
            resizeMode="cover"
            style={{
                flex: 1, justifyContent: 'center',
                alignItems: 'center'
            }}
            source={require('../utilities/images/backgroundimage.png')}>

            <SvgXml xml={Svgs.splashLogo} />
        </ImageBackground>
    );
};

Splash.propTypes = {

};

export default Splash;