import React from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native'; // Add useNavigation to handle navigation

export const Homepage = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.homepage}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Arshi</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Entypo name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Medical History Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Please review your medical history</Text>
          <Text style={styles.cardText}>
            This will help ensure that our clinicians have all the info they need to provide you with the best possible care.
          </Text>
          <Button title="OPEN MEDICAL HISTORY FORM" onPress={() => {}} />
        </View>

        {/* Scans Card */}
        <View style={styles.card}>
          <FontAwesome5 name="lungs-virus" size={48} color="black" />
          <Text>You have 3 scans available</Text>
        </View>

        {/* Appointment Card */}
        <View style={styles.card}>
          <AntDesign name="calendar" size={48} color="black" />
          <Text>You have 1 past appointment</Text>
        </View>

        {/* Upload Button - Navigates to Uploads Page */}
        <TouchableOpacity
          style={styles.newAppointmentButton}
          onPress={() => navigation.navigate('Uploads')} // Navigate to Uploads page
        >
          <AntDesign name="pluscircleo" size={24} color="white" />
          <Text style={styles.buttonText}>  Upload</Text>
        </TouchableOpacity>

        {/* Help Button */}
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpButtonText}>Help</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 20, // Adds vertical padding for better scrolling
    alignItems: 'center', // Centers content in the scrollable area
  },
  homepage: {
    backgroundColor: '#e9e7e7',
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    marginBottom: 20,
    textAlign: 'center',
  },
  newAppointmentButton: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  helpButton: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  helpButtonText: {
    color: '#333',
  },
});
