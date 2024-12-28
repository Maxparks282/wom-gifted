import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

export default function ChatScreen({ navigation }) {
  const [chatList, setChatList] = useState('newMatches');

  const switchChatList = (list) => {
    setChatList(list);
  };

  const newMatches = [
    {
      id: '1',
      name: 'Steve',
      message: 'Hello there!',
      image: require('../assets/steve.webp'),
    },
    {
      id: '2',
      name: 'Dave',
      message: 'Hi!',
      image: require('../assets/dave.webp'),
    },
  ];

  const messages = [
    {
      id: '1',
      name: 'Craig',
      message: 'How are you?',
      image: require('../assets/craig.webp'),
    },
    {
      id: '2',
      name: 'Kyle',
      message: 'Want to catch up later?',
      image: require('../assets/kyle.webp'),
    },
  ];

  const archive = [
    {
      id: '1',
      name: 'Jim',
      message: 'Remember our last meeting?',
      image: require('../assets/jim.webp'),
    },
    {
      id: '2',
      name: 'Asian Jim',
      message: 'Good times!',
      image: require('../assets/asian-jim.webp'),
    },
    {
        id: '3',
        name: 'Dwight',
        message: 'Bears. Beets. Battlestar Galactica.',
        image: require('../assets/dwight.webp'),
    }
  ];

  const chatData = {
    newMatches,
    messages,
    archive,
  };

  return (
    <View style={styles.main}>
      {/* Navigation buttons */}
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => switchChatList('newMatches')} style={styles.navButton}>
          <Text style={[styles.h2, chatList === 'newMatches' && styles.active]}>New Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => switchChatList('messages')} style={styles.navButton}>
          <Text style={[styles.h2, chatList === 'messages' && styles.active]}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => switchChatList('archive')} style={styles.navButton}>
          <Text style={[styles.h2, chatList === 'archive' && styles.active]}>Archive</Text>
        </TouchableOpacity>
      </View>

      {/* Chat list */}
      <FlatList
        data={chatData[chatList]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatCard}>
            <Image source={item.image} style={styles.chatImage} />
            <View style={styles.chatDetails}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatMessage}>{item.message}</Text>
            </View>
          </View>
        )}
        style={styles.chatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#1A2D42',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#263A53',
    paddingVertical: 10,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  h2: {
    color: '#D4D8DD',
    fontSize: 18,
    fontWeight: '600',
  },
  active: {
    color: '#D64161',
    fontWeight: '700',
  },
  chatList: {
    paddingHorizontal: 10,
  },
  chatCard: {
    flexDirection: 'row',
    backgroundColor: '#2A3E58',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatDetails: {
    flex: 1,
  },
  chatName: {
    color: '#78A6C8',
    fontSize: 16,
    fontWeight: '600',
  },
  chatMessage: {
    color: '#D4D8DD',
    fontSize: 14,
  },
});