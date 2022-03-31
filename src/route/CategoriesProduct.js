import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Category from '../screens/Category';
import Products from '../screens/Products';
const Stack = createNativeStackNavigator();
const CategoriesProduct = props => {

    return (



        <Stack.Navigator initialRouteName='Category'>
            <Stack.Screen name="Category" component={Category} options={{
                headerShown: false,
            }} />

            <Stack.Screen name="Product" component={Products} options={{
                headerShown: false,
            }} />

        </Stack.Navigator>



    );
};



export default CategoriesProduct;