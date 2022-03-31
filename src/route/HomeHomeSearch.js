import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Category from '../screens/Category';
import Products from '../screens/Products';
import Home from '../screens/Home';
import HomeSearch from '../screens/HomeSearch';
const Stack = createNativeStackNavigator();
const HomeHomeSearch = props => {

    return (



        <Stack.Navigator initialRouteName='Home' >

            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="HomeSearch" component={HomeSearch} options={{
                headerShown: false,
            }} />



        </Stack.Navigator>



    );
};



export default HomeHomeSearch;