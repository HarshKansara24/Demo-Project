import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './Navigator';


//Spalsh
import Splash from '../components/Splash/ChildComponent/Splash';

import DrawerMain from '../components/SideMenu/ChildComponent/DrawerMain';
import Setting_Timer from '../components/Home/ChildComponent/Setting_Timer';

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator headerMode="none" initialRouteName="Splash">
                <Stack.Screen component={Splash} name="Splash" />

                {/* //Home */}
                <Stack.Screen component={DrawerMain} name="Home" />
                <Stack.Screen component={Setting_Timer} name="Setting_Timer" />
                
                {/* //Help */}
            

            </Stack.Navigator>
        </NavigationContainer>
    );
};
