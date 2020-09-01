import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Appointments from '../pages/Appointments';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';

import CustomTabBar from '../components/CustomTabBar';

const TabNavigator = createBottomTabNavigator();

export default function MainTab(){ 
    return (
        <TabNavigator.Navigator tabBar={props => <CustomTabBar {...props} />}>
            <TabNavigator.Screen name="Home" component={Home}/>
            <TabNavigator.Screen name="Search" component={Search}/>
            <TabNavigator.Screen name="Appointments" component={Appointments}/>
            <TabNavigator.Screen name="Favorites" component={Favorites}/>
            <TabNavigator.Screen name="Profile" component={Profile}/>
        </TabNavigator.Navigator>
    )
}