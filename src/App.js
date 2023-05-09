import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text } from 'react-native';
import UserList from './views/UserList';
import UserForm from './views/UserForm';

const Stack = createNativeStackNavigator()

export default App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='UserList'>
                <Stack.Screen 
                    name='UserList'
                    component={ UserList }
                />
                <Stack.Screen 
                    name='UserForm'
                    component={ UserForm }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};