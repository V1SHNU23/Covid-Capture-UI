import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to request permission and pick an image
  const pickImage = async () => {
    // Request permission to access the media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission to access camera roll is required!');
      return;
    }

    // Launch the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri); // Set the URI of the selected image
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload your scan here:</Text>

      {/* Button to trigger image selection */}
      <Button title="Pick an Image" onPress={pickImage} />

      {/* Display the selected image */}
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}

      {/* Display some text about supported formats */}
      <Text style={styles.supportedFormats}>Supported formats: PNG, JPEG</Text>
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
  supportedFormats: {
    marginTop: 10,
    fontSize: 14,
    color: '#888',
  },
});
