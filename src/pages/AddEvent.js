import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddEvent = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');
  const [date, setDate] = useState('');
  const [timeRange, setTimeRange] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');

  const handleCreateEvent = () => {
    // Add logic here to create the event
    // Once the event is created, navigate back to the SpaceDetails screen
    navigation.goBack();
  };

  return (
    <View>
      <Text>Add Event</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Picture"
        value={picture}
        onChangeText={(text) => setPicture(text)}
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={(text) => setDate(text)}
      />
      <TextInput
        placeholder="Time Range"
        value={timeRange}
        onChangeText={(text) => setTimeRange(text)}
      />
      <TextInput
        placeholder="Ticket Price"
        value={ticketPrice}
        onChangeText={(text) => setTicketPrice(text)}
      />
      <Button title="Create Event" onPress={handleCreateEvent} />
    </View>
  );
};

export default AddEvent;
