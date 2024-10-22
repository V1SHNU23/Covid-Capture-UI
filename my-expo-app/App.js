import React from 'react';
import { NavigationContainer } from '@react-navigation/native';  // Import NavigationContainer
import AppNavigator from './navigation/AppNavigator';  // Import the navigator

export default function App() {
  return (
    <NavigationContainer>  {/* Wrap the navigator inside NavigationContainer */}
      <AppNavigator />
    </NavigationContainer>
  );
}
