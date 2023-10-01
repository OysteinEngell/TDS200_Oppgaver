import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
// npm install @react-navigation/native
import {createStackNavigator} from '@react-navigation/stack'
// npm install @react-navigation/stack

import HomePage from '../Pages/HomePage'


const Navbar = createStackNavigator()
const NavigationRoutes: React.FC = () => {
    const screenOptions = {headerShown: false}

    return(
        <NavigationContainer>
            <Navbar.Navigator initialRouteName='Home'>
                <Navbar.Screen 
                name='Home'
                component={HomePage}
                options={screenOptions}
                />
            </Navbar.Navigator>
        </NavigationContainer>
    )
}

export default NavigationRoutes