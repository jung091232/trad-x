
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.title}>Trad-X</Text>
        <Text style={styles.subtitle}>Smart. Fast. Limitless.</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Current Status</Text>
          <Text>Algo: Trad-X • Version 0.1.0</Text>
          <Text>Positions: 0 • PnL: 0.00%</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1220', padding: 20, paddingTop: 64 },
  title: { fontSize: 36, fontWeight: '800', color: 'white' },
  subtitle: { fontSize: 14, color: '#93C5FD', marginBottom: 16 },
  card: { backgroundColor: '#111827', borderRadius: 16, padding: 16, marginVertical: 8 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: 'white', marginBottom: 6 },
});
