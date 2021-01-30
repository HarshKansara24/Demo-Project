import React, { Component } from 'react'
import { createDrawerNavigator, createAppContainer } from '@react-navigation/drawer'
import { Dimensions } from 'react-native'
import { connect } from 'react-redux'
import Sidemenu from './Sidemenu';
import Home from '../../Home/ChildComponent/Home';

const Drawer = createDrawerNavigator()

function DrawerMain() {

    return (
        <Drawer.Navigator drawerStyle={{ width: "100%" }}
            drawerContent={(props) => <Sidemenu navigation={props.navigation} />}>
            <Drawer.Screen component={Home} name={"Home"} />
           
            
        </Drawer.Navigator>
    )

}
export default DrawerMain
