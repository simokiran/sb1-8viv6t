import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ActivePatrolScreen({ route }) {
  const { patrolId } = route.params;
  const [currentCheckpoint, setCurrentCheckpoint] = useState(1);

  const handleScanNFC = () => {
    // Implement NFC scanning logic here
    setCurrentCheckpoint(currentCheckpoint + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Active Patrol</Text>
      <Text style={styles.info}>Patrol ID: {patrolId}</Text>
      <Text style={styles.info}>Current Checkpoint: {currentCheckpoint}</Text>
      <Button title="Scan NFC Tag" onPress={handleScanNFC} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  info: {
    fontSize: 18,
    marginBottom: 8,
  },
});