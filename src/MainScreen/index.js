import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import screenList from './screenList';

const { width, height } = Dimensions.get('window')

export default function MainScreen({ navigation }) {
  return (
    <FlatList
      data={screenList}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.route)}
          >
            <Text>{index + 1} - {item.screen}</Text>
          </TouchableOpacity>
        )
      }}
      ItemSeparatorComponent={() => <View style={{ width: width - 32, height: StyleSheet.hairlineWidth, backgroundColor: '#ccc', marginVertical: 16 }} />
      }
      ListHeaderComponent={() => <View style={styles.header}><Text style={styles.headerText}>Screen List</Text></View>}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 16,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 16
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
  }
})