import React from "react";
import { View, Text, Button, Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import SideMenuList from "./SideMenuList";
import Dashboard from "./Dashboard"
const WIDTH = Dimensions.get('window').width;
const LeftDrawer = createDrawerNavigator(
{
Dashboard: { screen: Dashboard }
},
{
initialRouteName: "Dashboard",
drawerWidth:WIDTH*0.65,
drawerPosition:'left',
contentOptions: {
activeTintColor: "#e91e63"
},
contentComponent: props => <SideMenuList {...props} />,
drawerOpenRoute: 'LeftSideMenu',
drawerCloseRoute: 'LeftSideMenuClose',
drawerToggleRoute: 'LeftSideMenuToggle',
}
);
export default LeftDrawer;
