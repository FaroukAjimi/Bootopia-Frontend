import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SpaceDetails = ({ navigation }) => {
  const handleCreateEvent = () => {
    // handle create event logic here
    navigation.navigate('AddEvent');
  };

  return (
    <View style={styles.container}>
      <View style={styles.spaceImageContainer}>
        <Image style={styles.spaceImage} source={require('../../assets/splash.png')} />
      </View>
      <View style={styles.spaceDetails}>
        <Text style={styles.spaceName}>Space Name</Text>
        <Text style={styles.spaceRating}>4.5</Text>
        <Text style={styles.spaceAvailability}>Available from 9AM to 5PM</Text>
        <Text style={styles.spaceCapacity}>Capacity: 10 people</Text>
        <View style={styles.amenities}>
          <Image style={styles.amenityIcon} source={require('../../assets/splash.png')} />
          <Image style={styles.amenityIcon} source={require('../../assets/splash.png')} />
          {/* add more amenity icons here */}
        </View>
        <View style={styles.moreImages}>
          <Image style={styles.moreImage} source={require('../../assets/splash.png')} />
          <Image style={styles.moreImage} source={require('../../assets/splash.png')} />
          {/* add more images here */}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleCreateEvent}>
          <Text style={styles.buttonText}>Create Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  spaceImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  spaceImage: {
    height: 200,
    width: 200,
    borderRadius: 5,
  },
  spaceDetails: {
    marginBottom: 20,
  },
  spaceName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B3CE9',
  },
  spaceRating: {
    fontSize: 18,
    color: '#9B9B9B',
    marginBottom: 10,
  },
  spaceAvailability: {
    fontSize: 16,
    color: '#9B9B9B',
    marginBottom: 5,
  },
  spaceCapacity: {
    fontSize: 16,
    color: '#9B9B9B',
    marginBottom: 10,
  },
  amenities: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  amenityIcon: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  moreImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moreImage: {
    height: 80,
    width: 80,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6B3CE9',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default SpaceDetails;
