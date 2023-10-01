import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
// npm install @react-navigation/native
import {createStackNavigator} from '@react-navigation/stack'
// npm install @react-navigation/stack
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// npm install @react-navigation/bottom-tabs

import Icon from 'react-native-vector-icons/FontAwesome'
// npm install @react-native-vector-icons

import HomePage from '../Pages/HomePage'
import CreateTaskPage from '../Pages/CreateTaskPage'
import SettingsPage from '../Pages/SettingsPage'
import { Touchable } from 'react-native';


const Navbar = createStackNavigator()

const TabBar = createBottomTabNavigator()
const NavigationRoutes: React.FC = () => {

    return(
        <NavigationContainer>
            <TabBar.Navigator initialRouteName='To-Do'>
                <TabBar.Screen 
                    name='To-Do'
                    component={HomePage}
                    options={{
                        ...screenOptions, 
                        tabBarIcon: ({focused}) => (<Icon name='check' style={iconStyle(focused)} size={20} />)}}
                />
                <TabBar.Screen
                    name='New Task'
                    component={CreateTaskPage}
                    options={{
                        ...screenOptions, 
                        tabBarIcon: ({focused}) => (<Icon name='plus-circle' style={iconStyle(focused)} size={30} />)}}
                />
                <TabBar.Screen 
                    name='Settings'
                    component={SettingsPage}
                    options={{
                        ...screenOptions, 
                        tabBarIcon: ({focused}) => (<Icon name='cog' style={iconStyle(focused)} size={20} />)}}
                />
            </TabBar.Navigator>
        </NavigationContainer>
    )
}

const iconStyle = (focused: boolean) => ({
    color: focused ? '#0d0d0d' : '#4c4c4c'
})

const screenOptions = {
    headerShown: false,
    tabBarStyle: {
        backgroundColor: '#fafafa',
    },
    tabBarActiveTintColor: '#0d0d0d',
    tabBarInactiveTintColor: 'darkgray'

} as BottomTabNavigationOptions

export default NavigationRoutes