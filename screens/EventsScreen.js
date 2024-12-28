import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';

export default EventsScreen = ( { navigation } ) => {
    const [events, setEvents] = useState([
      {
        id: '1',
        title: 'Christmas Party',
        date: 'December 25',
        image: require('../assets/christmas.webp'),
        description: 'Join us for a Christmas Party on December 25th!'
      },
      {
        id: '2',
        title: 'New Year Party',
        date: 'December 31',
        image: require('../assets/new-years.webp'),
        description: 'Join us for a New Year Party on December 31st!'
      },
      {
        id: '3',
        title: 'Halloween Party',
        date: 'October 31',
        image: require('../assets/halloween.webp'),
        description: 'Join us for a Halloween Party on October 31st!'
      }
    ]);

  return (
    <View style={styles.main}>
        <FlatList
            data={events}
            renderItem={({item}) => (
              <View style={styles.card}>
                <Text style={styles.h3}>{item.title}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <Image
                  style={styles.cardImage}
                  source={item.image}
                />
                <Text style={styles.p}>{item.description}</Text>
                <Button
                  title="RSVP"
                  onPress={() => navigation.navigate('RSVP', { eventId: item.id })}
                />
              </View>
            )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1A2D42',
    paddingBlock: 20,
    width: '100%',
  },
  card: {
    width: '95%',
    paddingBlock: 30,
    paddingInline: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#101820',
    alignItems: 'center',
  },
  cardImage: {
    width: '90%',
    height: 200,
    marginBottom: 10,
  },
  h3: {
    color: '#D64161',
    fontSize: 25,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#101820',
    width: '100%',
  },
  date: {
    color: '#fefefe',
    fontSize: 20,
    fontStyle: 'italic',
    padding: 10,
    backgroundColor: '#101820',
  },
  p:{
    color: '#fefefe',
    fontSize: 20,
    padding: 10,
    backgroundColor: '#101820',
  }
});
