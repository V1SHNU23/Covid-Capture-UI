import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Homepage } from '../components/Homepage'; // Import the Homepage component
import globalStyles from '../styles/globalStyles'; // Import global styles

const HomeScreen = ({ navigation }) => {
  return (
    <View style={[styles.container, globalStyles.center]}>
      
      
      {/* Render the reusable Homepage component */}
      <Homepage />

      {/* Example button for navigation (assuming you have react-navigation set up) */}
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')} // Example navigation action
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e9e7e7',
  },
});
