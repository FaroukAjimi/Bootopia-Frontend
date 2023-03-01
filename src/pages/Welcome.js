import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Welcome = ({ navigation }) => {
  const handleNext = () => {
    // handle next button logic here
    navigation.navigate('Space');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/splash.png')} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Welcome to Bootopia!</Text>
        <Text style={styles.description}>
          Discover the best co-working spaces near you and book your spot today!
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6B3CE9',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Welcome;
