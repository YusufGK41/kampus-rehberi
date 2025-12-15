import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <View style={styles.header}>
        <Text style={styles.title}>🎓 Kampüs Rehberi</Text>
        <Text style={styles.subtitle}>Mersin Üniversitesi</Text>
        <Text style={styles.subtitle}>Erdemli Kampüsü</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Hoş Geldiniz!</Text>
        <Text style={styles.infoText}>Yeni öğrenciler için kampüs rehberi</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#bdc3c7',
    marginTop: 2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});

export default App;
