import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dummyPatrols = [
  { id: '1', name: 'Morning Patrol', status: 'Scheduled' },
  { id: '2', name: 'Afternoon Patrol', status: 'In Progress' },
  { id: '3', name: 'Night Patrol', status: 'Completed' },
];

export default function PatrolListScreen({ navigation }) {
  const renderPatrolItem = ({ item }) => (
    <TouchableOpacity
      style={styles.patrolItem}
      onPress={() => navigation.navigate('ActivePatrol', { patrolId: item.id })}
    >
      <Text style={styles.patrolName}>{item.name}</Text>
      <Text style={styles.patrolStatus}>{item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyPatrols}
        renderItem={renderPatrolItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  patrolItem: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 4,
  },
  patrolName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  patrolStatus: {
    fontSize: 14,
    color: 'gray',
  },
});