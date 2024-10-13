import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import PatrolListScreen from './screens/PatrolListScreen';
import ActivePatrolScreen from './screens/ActivePatrolScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PatrolList" component={PatrolListScreen} />
        <Stack.Screen name="ActivePatrol" component={ActivePatrolScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}