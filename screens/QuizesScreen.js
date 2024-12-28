import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default QuizesScreen = ( { navigation } ) => {
    const quizes = [
        {key: 'Genes Quiz'},
        {key: 'Hobbies Quiz'},
        {key: 'Food Quiz'},
    ];

  return (
    <View style={styles.main}>
        <Text>Welcome to the Quizes Screen!</Text>
        <FlatList
            data={quizes}
            renderItem={({item}) => <Text>{item.key}</Text>}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
