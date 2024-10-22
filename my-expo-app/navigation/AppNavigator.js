import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Homepage } from '../components/Homepage';
import { Upload } from '../screens/UploadDetails';  // Import Upload screen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen name="Uploads" component={Upload} /> {/* Register Upload screen */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
