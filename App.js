/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { Dimensions, Image } from 'react-native'
import { createAppContainer, createSwitchNavigator, createNavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Splashscreen from './screens/Splashscreen'
import FbLogin from './screens/FbLogin'
import SideMenu from './screens/SideMenu';
import SideMenuList from './screens/SideMenuList';
import DateTimepickers_reactnativepaper from './screens/DateTimepickers_reactnativepaper';
import Firebasepushnotification from './screens/Firebasepushnotification';
import Google_login from './screens/Google_login';
import Video_player from './screens/Video_player';
import Audio_player from './screens/Audio_player';
const AppNavigator = createStackNavigator({
  Splashscreen: { screen: Splashscreen },

  Google_login: { screen: Google_login },
  FbLogin: { screen: FbLogin },
  DateTimepickers_reactnativepaper: { screen: DateTimepickers_reactnativepaper },
  Firebasepushnotification: { screen: Firebasepushnotification },
  Video_player: { screen: Video_player },
  Audio_player:{screen:Audio_player},
  SideMenu: {
    screen: SideMenu,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  SideMenuList: {
    screen: SideMenuList,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },

},
  {
    headerMode: 'none',
    initialRouteName: 'Splashscreen',
  });

export default createAppContainer(AppNavigator);
