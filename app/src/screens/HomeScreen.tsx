import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Card from '../components/Card';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Trad-X</Text>
      <Text style={styles.subtitle}>Smart. Fast. Limitless.</Text>

      <Card>
        <Text style={styles.cardTitle}>Current Status</Text>
        <Text>Algo: Trad-X • Version 0.1.0</Text>
        <Text>Positions: 0 • PnL: 0.00%</Text>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>Quick Links</Text>
        <Text>• Referral</Text>
        <Text>• Config</Text>
        <Text>• Stream</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220',
    paddingTop: 64,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: '#93C5FD',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    marginBottom: 6,
  },
});