import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export const UploadDetails = ({ route, navigation }) => {
  const { imageUri } = route.params;  // Extract imageUri passed from Upload.js

  // Simulate analyzing the image (placeholder function)
  const analyzeImage = () => {
    // You can trigger an analysis process here
    alert('Analyzing image...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uploaded Image Details</Text>

      {/* Display the uploaded image */}
      <Image source={{ uri: imageUri }} style={styles.image} />

      {/* Show additional details (placeholder) */}
      <Text style={styles.details}>Image URI: {imageUri}</Text>
      <Text style={styles.details}>Image size: 200 KB</Text>
      <Text style={styles.details}>Format: PNG</Text>

      {/* Analyze Image Button */}
      <Button title="Analyze Image" onPress={analyzeImage} />

      {/* Button to go back to upload a different image */}
      <Button title="Upload Another Image" onPress={() => navigation.navigate('Uploads')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  details: {
    fontSize: 16,
    marginVertical: 5,
  },
});
 