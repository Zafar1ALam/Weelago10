import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Deals from '../screens/Deals';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import { SvgXml } from 'react-native-svg';
import { Dimensions, Text, View } from 'react-native';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import CategoriesProduct from './CategoriesProduct';
import HomeHomeSearch from './HomeHomeSearch';
const Tab = createBottomTabNavigator();
const TabNavigations = props => {
    return (
        <View style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            backgroundColor: COLORS.whiteFFFFFF,
            flex: 1,
        }}>
            {/* <NavigationContainer> */}
            <Tab.Navigator
                //    initialRouteName='HomeHomeSearch'
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        height: 60,
                        //backgroundColor: 'red',
                        // paddingVertical: 25
                        paddingBottom: 10,
                        paddingHorizontal: '3%',
                        paddingTop: 10,
                        //    borderColor: COLORS.cylindricalFA4248,
                        borderTopWidth: 2,
                        borderTopColor: COLORS.cylindricalFA4248,
                        borderRightWidth: 2,
                        borderRightColor: COLORS.cylindricalFA4248,
                        borderLeftWidth: 2,
                        borderLeftColor: COLORS.cylindricalFA4248,
                        marginTop: 20

                    },

                }}>
                <Tab.Screen name="HomeHomeSearch" component={HomeHomeSearch}


                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text style={STYLES.fontSize12_FA4248_Montserrat_SemiBold}>Home</Text> : null
                        ),
                        tabBarIcon: ({ color, focused }) => {
                            if (focused) {


                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.292" height="24.841" viewBox="0 0 21.292 24.841">
                                    <path id="Path" d="M51.834,9.714,41.748.226a.825.825,0,0,0-1.153.017L31.069,9.731a.874.874,0,0,0-.255.619V23.978a.852.852,0,0,0,.841.863h7a.852.852,0,0,0,.841-.863V17.653h3.922v6.325a.852.852,0,0,0,.841.863h7a.852.852,0,0,0,.84-.863V10.35A.873.873,0,0,0,51.834,9.714Zm-1.409,13.4H45.1V16.791a.852.852,0,0,0-.841-.863h-5.6a.852.852,0,0,0-.841.863v6.325H32.5v-12.4l8.7-8.667,9.229,8.682V23.116Z" transform="translate(-30.814 0)" fill="#fa4248"/>
                                  </svg>
                                                                           
                                      
                      `} />
                                )
                            }
                            else {

                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24.676" height="27.14" viewBox="0 0 24.676 27.14">
                        <g id="Icon_feather-home" data-name="Icon feather-home" transform="translate(1.25 1.25)">
                          <path id="Path_27" data-name="Path 27" d="M13.5,30.32V18h7.392V30.32" transform="translate(-6.108 -5.68)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                          <path id="Path_36" data-name="Path 36" d="M4.5,11.624,15.588,3l11.088,8.624V25.176a2.464,2.464,0,0,1-2.464,2.464H6.964A2.464,2.464,0,0,1,4.5,25.176Z" transform="translate(-4.5 -3)" fill="none" stroke="#cbcbcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                        </g>
                      </svg>
                      
                                      
                      `} />


                                )
                            }
                        }
                    }}
                />

                <Tab.Screen name="CategoriesProduct" component={CategoriesProduct}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text style={STYLES.fontSize12_FA4248_Montserrat_SemiBold}>Category</Text> : null
                        ),
                        tabBarIcon: ({ color, focused }) => {
                            //console.log(focused)
                            if (focused) {

                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.624" height="17.569" viewBox="0 0 21.624 17.569">
                                    <path id="Icon_awesome-list-ul" data-name="Icon awesome-list-ul" d="M2.027,3.375A2.027,2.027,0,1,0,4.054,5.4,2.027,2.027,0,0,0,2.027,3.375Zm0,6.757A2.027,2.027,0,1,0,4.054,12.16a2.027,2.027,0,0,0-2.027-2.027Zm0,6.757a2.027,2.027,0,1,0,2.027,2.027A2.027,2.027,0,0,0,2.027,16.89Zm18.921.676H7.433a.676.676,0,0,0-.676.676v1.351a.676.676,0,0,0,.676.676H20.948a.676.676,0,0,0,.676-.676V18.241A.676.676,0,0,0,20.948,17.566Zm0-13.515H7.433a.676.676,0,0,0-.676.676V6.078a.676.676,0,0,0,.676.676H20.948a.676.676,0,0,0,.676-.676V4.726A.676.676,0,0,0,20.948,4.051Zm0,6.757H7.433a.676.676,0,0,0-.676.676v1.351a.676.676,0,0,0,.676.676H20.948a.676.676,0,0,0,.676-.676V11.484A.676.676,0,0,0,20.948,10.808Z" transform="translate(0 -3.375)" fill="#fa4248"/>
                                  </svg>
                                  
                              
                                  
                  `} />
                                )
                            }
                            else

                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.624" height="17.569" viewBox="0 0 21.624 17.569">
                                    <path id="Icon_awesome-list-ul" data-name="Icon awesome-list-ul" d="M2.027,3.375A2.027,2.027,0,1,0,4.054,5.4,2.027,2.027,0,0,0,2.027,3.375Zm0,6.757A2.027,2.027,0,1,0,4.054,12.16a2.027,2.027,0,0,0-2.027-2.027Zm0,6.757a2.027,2.027,0,1,0,2.027,2.027A2.027,2.027,0,0,0,2.027,16.89Zm18.921.676H7.433a.676.676,0,0,0-.676.676v1.351a.676.676,0,0,0,.676.676H20.948a.676.676,0,0,0,.676-.676V18.241A.676.676,0,0,0,20.948,17.566Zm0-13.515H7.433a.676.676,0,0,0-.676.676V6.078a.676.676,0,0,0,.676.676H20.948a.676.676,0,0,0,.676-.676V4.726A.676.676,0,0,0,20.948,4.051Zm0,6.757H7.433a.676.676,0,0,0-.676.676v1.351a.676.676,0,0,0,.676.676H20.948a.676.676,0,0,0,.676-.676V11.484A.676.676,0,0,0,20.948,10.808Z" transform="translate(0 -3.375)" fill="#a0a0a0"/>
                                  </svg>
                                  
                          
                                      
                      `} />
                                )
                        }


                    }} />

                <Tab.Screen name="Deals" component={Deals}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text style={STYLES.fontSize12_FA4248_Montserrat_SemiBold}>Deals</Text> : null
                        ),
                        tabBarIcon: ({ color, focused }) => {
                            //console.log(focused)
                            if (focused) {

                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24.474" height="23.276" viewBox="0 0 24.474 23.276">
                                    <g id="Group_10953" data-name="Group 10953" transform="translate(-115 -702.331)">
                                      <path id="Icon_awesome-percent" data-name="Icon awesome-percent" d="M1.387,2.774A1.387,1.387,0,1,0,0,1.387,1.386,1.386,0,0,0,1.387,2.774Zm0-1.981a.594.594,0,1,1-.594.594A.595.595,0,0,1,1.387.793ZM4.161,3.567A1.387,1.387,0,1,0,5.548,4.954,1.386,1.386,0,0,0,4.161,3.567Zm0,1.981a.594.594,0,1,1,.594-.594A.595.595,0,0,1,4.161,5.548ZM4.858,0H5.25a.3.3,0,0,1,.244.468L.959,6.212a.3.3,0,0,1-.243.126H.3a.3.3,0,0,1-.244-.468L4.616.129A.3.3,0,0,1,4.858,0Z" transform="translate(124.508 712.414)" fill="#fa4248"/>
                                      <path id="Icon_metro-star-empty" data-name="Icon metro-star-empty" d="M27.045,11.574l-8.456-1.229L14.808,2.683l-3.781,7.662L2.571,11.574l6.119,5.964L7.245,25.959l7.563-3.976,7.563,3.976-1.444-8.421,6.119-5.964ZM14.808,20.093,9.467,22.9l1.02-5.947L6.166,12.742l5.971-.868,2.67-5.411,2.671,5.411,5.971.868-4.321,4.212,1.02,5.947-5.341-2.808Z" transform="translate(112.43 699.648)" fill="#fa4248"/>
                                    </g>
                                  </svg>
                                  
                              
                                  
                  `} />
                                )
                            }
                            else

                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24.474" height="23.276" viewBox="0 0 24.474 23.276">
                                    <g id="Group_10953" data-name="Group 10953" transform="translate(0)">
                                      <path id="Icon_awesome-percent" data-name="Icon awesome-percent" d="M1.387,2.774A1.387,1.387,0,1,0,0,1.387,1.386,1.386,0,0,0,1.387,2.774Zm0-1.981a.594.594,0,1,1-.594.594A.595.595,0,0,1,1.387.793ZM4.161,3.567A1.387,1.387,0,1,0,5.548,4.954,1.386,1.386,0,0,0,4.161,3.567Zm0,1.981a.594.594,0,1,1,.594-.594A.595.595,0,0,1,4.161,5.548ZM4.858,0H5.25a.3.3,0,0,1,.244.468L.959,6.212a.3.3,0,0,1-.243.126H.3a.3.3,0,0,1-.244-.468L4.616.129A.3.3,0,0,1,4.858,0Z" transform="translate(9.508 10.084)" fill="#a0a0a0"/>
                                      <path id="Icon_metro-star-empty" data-name="Icon metro-star-empty" d="M27.045,11.574l-8.456-1.229L14.808,2.683l-3.781,7.662L2.571,11.574l6.119,5.964L7.245,25.959l7.563-3.976,7.563,3.976-1.444-8.421,6.119-5.964ZM14.808,20.093,9.467,22.9l1.02-5.947L6.166,12.742l5.971-.868,2.67-5.411,2.671,5.411,5.971.868-4.321,4.212,1.02,5.947-5.341-2.808Z" transform="translate(-2.571 -2.683)" fill="#a0a0a0"/>
                                    </g>
                                  </svg>
                          
                                      
                      `} />
                                )
                        }


                    }} />

                <Tab.Screen name="Cart" component={Cart}

                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text style={STYLES.fontSize12_FA4248_Montserrat_SemiBold}>Cart</Text> : null
                        ),
                        tabBarIcon: ({ color, focused }) => {
                            if (focused) {

                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.381" height="15.223" viewBox="0 0 21.381 15.223">
                                    <g id="Cart_Ico" data-name="Cart Ico" transform="translate(0.411 0.455)">
                                      <path id="Path_50" data-name="Path 50" d="M814.26,5063.637H811.3c-.016-.725-.042-.3-.09-.346l-3.671-3.719a.373.373,0,0,0-.519-.046.578.578,0,0,0,0,.672l3.319,3.439H798.709l3.32-3.462a.477.477,0,0,0,0-.6.373.373,0,0,0-.519-.046l-3.671,3.788c-.048.047-.074-.4-.09.324h-3.313a.363.363,0,1,0,0,.726h1.376l1.927,9.145a.366.366,0,0,0,.359.289h12.849a.366.366,0,0,0,.361-.294l1.778-9.14h1.174a.363.363,0,1,0,0-.726Zm-3.616,9.434H798.4l-1.835-8.708h15.777Z" transform="translate(-794.069 -5059.439)" fill="#fa4248" stroke="#fa4248" stroke-miterlimit="10" stroke-width="0.823"/>
                                    </g>
                                  </svg>
                                             
                                           
`} />
                                )
                            }
                            else
                                return (
                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.381" height="30.576" viewBox="0 0 21.381 30.576">
                                    <g id="Group_10954" data-name="Group 10954" transform="translate(0.411)">
                                      <path id="Path_50" data-name="Path 50" d="M814.26,5063.637H811.3c-.016-.725-.042-.3-.09-.346l-3.671-3.719a.373.373,0,0,0-.519-.046.578.578,0,0,0,0,.672l3.319,3.439H798.709l3.32-3.462a.477.477,0,0,0,0-.6.373.373,0,0,0-.519-.046l-3.671,3.788c-.048.047-.074-.4-.09.324h-3.313a.363.363,0,1,0,0,.726h1.376l1.927,9.145a.366.366,0,0,0,.359.289h12.849a.366.366,0,0,0,.361-.294l1.778-9.14h1.174a.363.363,0,1,0,0-.726Zm-3.616,9.434H798.4l-1.835-8.708h15.777Z" transform="translate(-794.069 -5043.631)" fill="#a0a0a0" stroke="#a0a0a0" stroke-miterlimit="10" stroke-width="0.823"/>
                                      <circle id="Counter_Bg" data-name="Counter Bg" cx="7.985" cy="7.985" r="7.985" transform="translate(2.089)" fill="#a0a0a0"/>
                                      <text id="_5" data-name="5" transform="translate(9.412 9.774)" fill="#fff" font-size="8" font-family="Lato-Light, Lato" font-weight="300"><tspan x="-2.32" y="0">5</tspan></text>
                                    </g>
                                  </svg>
                                  
                                           
`} />
                                )
                        }
                    }}
                />

                <Tab.Screen name="Profile" component={Profile}

                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text style={STYLES.fontSize12_FA4248_Montserrat_SemiBold}>Profile</Text> : null
                        ),
                        tabBarIcon: ({ color, focused }) => {
                            if (focused) {

                                return (

                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.292" height="21.292" viewBox="0 0 21.292 21.292">
                                    <path id="Path_3694" data-name="Path 3694" d="M18.174,13.764a10.605,10.605,0,0,0-4.046-2.538,6.155,6.155,0,1,0-6.965,0A10.663,10.663,0,0,0,0,21.292H1.663a8.983,8.983,0,0,1,17.966,0h1.663A10.577,10.577,0,0,0,18.174,13.764Zm-7.528-3.118a4.491,4.491,0,1,1,4.491-4.491A4.5,4.5,0,0,1,10.646,10.646Z" fill="#fa4248"/>
                                  </svg>
                                              
                                            
      `} />
                                )
                            }
                            else
                                return (

                                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="23.385" height="21.292" viewBox="0 0 23.385 21.292">
                                    <path id="Path_3694" data-name="Path 3694" d="M19.96,13.764a11.865,11.865,0,0,0-4.443-2.538,6.02,6.02,0,0,0,2.935-5.072C18.452,2.761,15.42,0,11.692,0s-6.76,2.761-6.76,6.155a6.02,6.02,0,0,0,2.935,5.072,11.865,11.865,0,0,0-4.443,2.538A10.121,10.121,0,0,0,0,21.292H1.827c0-4.953,4.426-8.983,9.866-8.983s9.866,4.03,9.866,8.983h1.827A10.121,10.121,0,0,0,19.96,13.764Zm-8.268-3.118A4.733,4.733,0,0,1,6.76,6.155a4.733,4.733,0,0,1,4.933-4.491,4.733,4.733,0,0,1,4.933,4.491A4.733,4.733,0,0,1,11.692,10.646Z" fill="#a0a0a0"/>
                                  </svg>
                                  
                                  
                                            
      `} />
                                )
                        }
                    }}
                />

            </Tab.Navigator>
            {/* // </NavigationContainer> */}
        </View>
    );
};

TabNavigations.propTypes = {

};

export default TabNavigations;