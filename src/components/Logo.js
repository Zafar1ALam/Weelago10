import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';

const Logo = props => {
    return (

        <SvgXml xml={Svgs.logo} />
    );
};

Logo.propTypes = {

};

export default Logo;