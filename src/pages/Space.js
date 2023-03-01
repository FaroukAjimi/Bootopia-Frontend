import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Space = ({ navigation }) => {
  const handleSpaceDetails = () => {
    // handle space details logic here
    navigation.navigate('SpaceDetails');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Co-Working Spaces</Text>
      </View>
      <View style={styles.spaceList}>
        <TouchableOpacity style={styles.spaceItem} onPress={handleSpaceDetails}>
          <Image style={styles.spaceImage} source={require('../../assets/splash.png')} />
          <View style={styles.spaceText}>
            <Text style={styles.spaceName}>Space Name</Text>
            <Text style={styles.spaceRating}>4.5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spaceItem} onPress={handleSpaceDetails}>
          <Image style={styles.spaceImage} source={require('../../assets/splash.png')} />
          <View style={styles.spaceText}>
            <Text style={styles.spaceName}>Space Name</Text>
            <Text style={styles.spaceRating}>4.5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spaceItem} onPress={handleSpaceDetails}>
          <Image style={styles.spaceImage} source={require('../../assets/splash.png')} />
          <View style={styles.spaceText}>
            <Text style={styles.spaceName}>Space Name</Text>
            <Text style={styles.spaceRating}>4.5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spaceItem} onPress={handleSpaceDetails}>
          <Image style={styles.spaceImage} source={require('../../assets/splash.png')} />
          <View style={styles.spaceText}>
            <Text style={styles.spaceName}>Space Name</Text>
            <Text style={styles.spaceRating}>4.5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spaceItem} onPress={handleSpaceDetails}>
          <Image style={styles.spaceImage} source={require('../../assets/splash.png')} />
          <View style={styles.spaceText}>
            <Text style={styles.spaceName}>Space Name</Text>
            <Text style={styles.spaceRating}>4.5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spaceItem} onPress={handleSpaceDetails}>
          <Image style={styles.spaceImage} source={require('../../assets/splash.png')} />
          <View style={styles.spaceText}>
            <Text style={styles.spaceName}>Space Name</Text>
            <Text style={styles.spaceRating}>4.5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spaceItem} onPress={handleSpaceDetails}>
          <Image style={styles.spaceImage} source={require('../../assets/splash.png')} />
          <View style={styles.spaceText}>
            <Text style={styles.spaceName}>Space Name</Text>
            <Text style={styles.spaceRating}>4.5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spaceItem} onPress={handleSpaceDetails}>
          <Image style={styles.spaceImage} source={require('../../assets/splash.png')} />
          <View style={styles.spaceText}>
            <Text style={styles.spaceName}>Space Name</Text>
            <Text style={styles.spaceRating}>4.5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spaceItem} onPress={handleSpaceDetails}>
          <Image style={styles.spaceImage} source={require('../../assets/splash.png')} />
          <View style={styles.spaceText}>
            <Text style={styles.spaceName}>Space Name</Text>
            <Text style={styles.spaceRating}>4.5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spaceItem} onPress={handleSpaceDetails}>
          <Image style={styles.spaceImage} source={require('../../assets/splash.png')} />
          <View style={styles.spaceText}>
            <Text style={styles.spaceName}>Space Name</Text>
            <Text style={styles.spaceRating}>4.5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spaceItem} onPress={handleSpaceDetails}>
          <Image style={styles.spaceImage} source={require('../../assets/splash.png')} />
          <View style={styles.spaceText}>
            <Text style={styles.spaceName}>Space Name</Text>
            <Text style={styles.spaceRating}>4.5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spaceItem} onPress={handleSpaceDetails}>
          <Image style={styles.spaceImage} source={require('../../assets/splash.png')} />
          <View style={styles.spaceText}>
            <Text style={styles.spaceName}>Space Name</Text>
            <Text style={styles.spaceRating}>4.5</Text>
          </View>
        </TouchableOpacity>
        
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Notifications</Text>
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
  header: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B3CE9',
  },
  spaceList: {
    flex: 1,
  },
  spaceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  spaceImage: {
    height: 80,
    width: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  spaceText: {
    flex: 1,
  },
  spaceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  spaceRating: {
    fontSize: 16,
    color: '#9B9B9B',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#D8D8D8',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    color: '#6B3CE9',
    fontWeight: 'bold',
  },
});

export default Space;
