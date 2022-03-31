import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Dimensions } from "react-native";
import COLORS from './utilities/colors/Color';
// import COLORS from './assets/colors/Color';

const STYLES = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        paddingHorizontal: '14%',
        //   backgroundColor: 'yellow',
        //   paddingVertical: '3%',
        backgroundColor: COLORS.whiteFFFFFF,
        // alignItems: 'center'

    },
    container_PH5_PV5: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        //  backgroundColor: 'yellow',
        //   paddingVertical: '3%',
        backgroundColor: COLORS.whiteFFFFFF,
        // alignItems: 'center'

    },
    fontSize31_4A4B4D_Quicksand_Bold: {
        fontSize: 31,
        color: COLORS.grey4A4B4D,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize30_1D2226_Quicksand_Bold: {
        fontSize: 30,
        color: COLORS.black1D22226,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize28_4A4B4D_Quicksand_Bold: {
        fontSize: 28,
        color: COLORS.grey4A4B4D,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize25_4A4B4D_Quicksand_Bold: {
        fontSize: 25,
        color: COLORS.grey4A4B4D,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize23_4A4B4D_Quicksand_Bold: {
        fontSize: 23,
        color: COLORS.grey4A4B4D,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize22_4A4B4D_Quicksand_Bold: {
        fontSize: 22,
        color: COLORS.grey4A4B4D,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize21_4A4B4D_Quicksand_Bold: {
        fontSize: 21,
        color: COLORS.grey4A4B4D,
        fontFamily: 'Quicksand - Bold',
    },

    fontSize21_1C1A1A_Quicksand_Bold: {
        fontSize: 21,
        color: COLORS.black1C1A1A,
        fontFamily: 'Quicksand - Bold',
    },

    fontSize20_FFFFFF_Quicksand_Bold: {
        fontSize: 20,
        color: COLORS.whiteFFFFFF,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize18_7C7D7E_Quicksand_Bold: {
        fontSize: 18,
        color: COLORS.grey7C7D7E,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize18_4A4B4D_Raleway_Bold: {
        fontSize: 18,
        color: COLORS.grey4A4B4D,
        fontFamily: 'Raleway-Bold',
    },
    fontSize18_4A4B4D_Raleway_Bold_52: {
        fontSize: 18,
        color: COLORS.grey4A4B4D_52,
        fontFamily: 'Raleway-Bold',
    },//
    fontSize18_4A4B4D_Quicksand_Medium: {
        fontSize: 18,
        color: COLORS.grey4A4B4D,
        fontFamily: 'Quicksand-Medium',
    },

    fontSize17_4A4B4D_Quicksand_Bold: {
        fontSize: 17,
        color: COLORS.grey4A4B4D,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize16_4A4B4D_Quicksand_Bold: {
        fontSize: 16,
        color: COLORS.grey4A4B4D,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize16_FFFFFF_Quicksand_Bold: {
        fontSize: 16,
        color: COLORS.whiteFFFFFF,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize15_1C1A1A_Quicksand_Bold: {
        fontSize: 15,
        color: COLORS.black1C1A1A,
        fontFamily: 'Quicksand - Bold',
    },

    fontSize15_707070_Quicksand_Bold: {
        fontSize: 15,
        color: COLORS.grey707070,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize15_FFFFFF_Raleway_Bold: {
        fontSize: 15,
        color: COLORS.whiteFFFFFF,
        fontFamily: 'Raleway-Bold',
    },
    fontSize14_4A4B4D_Quicksand_Bold: {
        fontSize: 14,
        color: COLORS.grey4A4B4D,
        fontFamily: 'Quicksand - Bold',
    },

    fontSize14_1D2226_Quicksand_Bold: {
        fontSize: 14,
        color: COLORS.black1D22226,
        fontFamily: 'Quicksand - Bold',
    },//
    fontSize14_1D22226_50_Raleway_Regular: {
        fontSize: 14,
        color: COLORS.black1D22226,
        fontFamily: 'Raleway-Regular',
    },

    fontSize14_707070_Segoe_UI_Regular: {
        fontSize: 14,
        color: COLORS.grey707070,//Segoe UI - Regular
        /// fontFamily: 'Segoe UI - Regular',
    },/////////////////  yeh font nhi mil rha
    fontSize14_1C1A1A_Quicksand_Bold: {
        fontSize: 14,
        color: COLORS.black1C1A1A,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize14_B6B7B7_Metropolis_Regular: {
        fontSize: 14,
        color: COLORS.mainGreenB6B7B7,//Metropolis_Regular
        /// fontFamily: 'Quicksand - Bold',
    },/////////////////  yeh font nhi mil rha
    fontSize14_B6B7B7_Metropolis_SemiBold: {
        fontSize: 14,
        color: COLORS.grey4A4B4D,//Metropolis_SemiBold
        /// fontFamily: 'Quicksand - Bold',
    },/////////////////  yeh font nhi mil rha
    fontSize13_1C1A1A_Quicksand_Bold: {
        fontSize: 13,
        color: COLORS.black1C1A1A,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize13_F815B8_Quicksand_Bold: {
        fontSize: 13,
        color: COLORS.shockingPink,
        fontFamily: 'Quicksand - Bold',
    },//
    fontSize13_7C7D7E_Raleway_Regular: {
        fontSize: 13,
        color: COLORS.grey7C7D7E,
        fontFamily: 'Raleway-Regular',
    },
    fontSize12_4A4B4D_Quicksand_Medium: {
        fontSize: 12,
        color: COLORS.grey4A4B4D,
        fontFamily: 'Quicksand-Medium',
    },//
    fontSize12_1C1A1A_Quicksand_Bold: {
        fontSize: 12,
        color: COLORS.black1C1A1A,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize12_7C7D7E_Metropolis_Regular: {
        fontSize: 12,
        color: COLORS.grey7C7D7E,//Metropolis_Regular
        /// fontFamily: 'Quicksand - Bold',
    },/////////////////  yeh font nhi mil rha
    fontSize12_FA4248_Montserrat_SemiBold: {
        fontSize: 12,
        color: COLORS.cylindricalFA4248,
        fontFamily: 'Montserrat-SemiBold',
    },
    fontSize11_FFFFFF_Quicksand_Bold: {
        fontSize: 11,
        color: COLORS.whiteFFFFFF,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize10_FFFFFF_Quicksand_Bold: {
        fontSize: 10,
        color: COLORS.whiteFFFFFF,
        fontFamily: 'Quicksand - Bold',
    },
    fontSize10_FFFFFF_Quicksand_Medium: {
        fontSize: 10,
        color: COLORS.whiteFFFFFF,
        fontFamily: 'Quicksand-Medium',
    },

});

export default STYLES;