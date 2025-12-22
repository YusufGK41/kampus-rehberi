import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Ana Sayfa Stilleri
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  scrollContent: {
    padding: 20,
  },

  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  box: {
    backgroundColor: '#3498db',
    width: '30%',
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  emoji: {
    fontSize: 36,
    marginBottom: 8,
  },

  boxText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Sayfa Stilleri
  pageContainer: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  pageContent: {
    padding: 20,
  },

  pageTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 30,
  },

  infoCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },

  infoText: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 8,
    lineHeight: 24,
  },
});
