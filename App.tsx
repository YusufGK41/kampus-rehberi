import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.boxText}>📱</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>💻</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>🎮</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.boxText}>🎵</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>📚</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>⚽</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },

  box: {
    backgroundColor: '#3498db',
    width: '30%', // ← 3 KUTU İÇİN NE OLMALI? (30% dene)
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  boxText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default App;
