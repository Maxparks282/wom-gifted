import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image } from 'react-native';

export default HomeScreen = ({ navigation }) => {
  const [quizes, setQuizes] = useState([
    {
      id: '1',
      title: 'Genes Quiz',
      description: 'Tell us about genes you like.',
    },
    {
      id: '2',
      title: 'Hobbies Quiz',
      description: 'Find matches from hobbies.',
    },
    {
      id: '3',
      title: 'Food Quiz',
      description: 'What food do you like?',
    },
  ]);

  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Christmas Party',
      date: 'December 25',
      image: require('../assets/christmas.webp'),
    },
    {
      id: '2',
      title: 'New Year Party',
      date: 'December 31',
      image: require('../assets/new-years.webp'),
    },
    {
      id: '3',
      title: 'Halloween Party',
      date: 'October 31',
      image: require('../assets/halloween.webp'),
    }
  ]);

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        <Text style={styles.h2}>New Quizzes</Text>
        <FlatList
          data={quizes}
          renderItem={({ item }) => (
            <View style={styles.card1}>
              <Text style={styles.h3}>{item.title}</Text>
              <Text style={styles.p}>{item.description}</Text>
              <Button
                title="Start Quiz"
                onPress={() => navigation.navigate('Quiz', { quizId: item.id })}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal // Enable horizontal scrolling
          showsHorizontalScrollIndicator={false} // Hide the scroll indicator
          contentContainerStyle={styles.sliderContainer} // Style for the slider
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.h2}>Upcoming Events</Text>
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <View style={styles.card2}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.h3}>{item.title}</Text>
              <Text style={styles.p}>{item.date}</Text>
              <Button
                title="View Event"
                onPress={() => navigation.navigate('Event', { eventId: item.id })}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.sliderContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1A2D42',
    paddingBlock: 50,
  },
  section: {
    margin: 20,
    width: '100%',
  },
  h2: {
    color: '#D64161',
    fontSize: 25,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#101820',
    width: '100%',
  },
  sliderContainer: {
    paddingHorizontal: 10,
  },
  card1: {
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card2: {
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h3: {
    color: '#78A6C8',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  p: {
    color: '#D4D8DD',
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  cardImage: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
});
