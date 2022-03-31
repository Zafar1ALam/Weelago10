import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';
import TabNavigations from './src/route/TabNavigations';
import AccountCreated from './src/screens/AccountCreated';

import CategoriesProduct from './src/route/CategoriesProduct';
import AddToCart from './src/screens/AddToCart';
import Cart from './src/screens/Cart';
import cc from './src/Context'
import { ccValue } from './src/Context';
import OrderHistory from './src/screens/OrderHistory';
import { Dimensions, View } from 'react-native';
import COLORS from './src/utilities/colors/Color';
import Products from './src/screens/Products';
import HomeHomeSearch from './src/route/HomeHomeSearch';
import Category from './src/screens/Category';
const Stack = createNativeStackNavigator();
const App = props => {
  //const [stateList, setStateList] = useState(ccValue)
  return (

    // <View style={{
    //   height: Dimensions.get('window').height,
    //   width: Dimensions.get('window').width,
    //   backgroundColor: COLORS.whiteFFFFFF,
    //   flex: 1,
    // }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Splash" component={Splash} options={{
          headerShown: false,
        }} />

        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="AccountCreated" component={AccountCreated} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="TabNavigations" component={TabNavigations} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Category" component={Category} options={{
          headerShown: false,
        }} />
        {/* <Stack.Screen name="CategoriesProduct" component={CategoriesProduct} options={{
          headerShown: false,
        }} /> */}
        <Stack.Screen name="AddToCart" component={AddToCart} options={{
          headerShown: false,
        }} />
        {/* <Stack.Screen name="HomeHomeSearch" component={HomeHomeSearch} options={{
          headerShown: false,
        }} /> */}
        <Stack.Screen name="Cart" component={Cart} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>

    </NavigationContainer>
    // </View>
  );
};



export default App;