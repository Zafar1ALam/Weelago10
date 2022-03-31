/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import MainPage from './MainPage';
import TabNavigations from './src/route/TabNavigations';
import AccountCreated from './src/screens/AccountCreated';
import AddToCart from './src/screens/AddToCart';
import Cart from './src/screens/Cart';

import Checkout from './src/screens/Checkout';
import ForgotPassword from './src/screens/ForgotPassword';

import Login from './src/screens/Login';
import OrderHistory from './src/screens/OrderHistory';
import ResetPassword from './src/screens/ResetPassword';
import SignUp from './src/screens/SignUp';

AppRegistry.registerComponent(appName, () => MainPage);
