import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function YurtSayfasi({ navigation }: any) {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <Text style={styles.pageTitle}>🏠 Yurt Bilgileri</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>KYK Erdemli Erkek Öğrenci Yurdu</Text>
          <Text style={styles.infoText}>📍 Mesafe: 2.5 km</Text>
          <Text style={styles.infoText}>📞 Telefon: 0324 XXX XX XX</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>KYK Erdemli Kız Öğrenci Yurdu</Text>
          <Text style={styles.infoText}>📍 Mesafe: 3 km</Text>
          <Text style={styles.infoText}>📞 Telefon: 0324 XXX XX XX</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
