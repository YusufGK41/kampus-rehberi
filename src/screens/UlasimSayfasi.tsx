import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UlasimSayfasi({ navigation }: any) {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <Text style={styles.pageTitle}>🚌 Ulaşım Bilgileri</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>156 - 170 - 177 Numaralı Hatlar</Text>
          <Text style={styles.infoText}>
            🚌 Güzergah: Erdemli Merkez - Kampüs
          </Text>
          <Text style={styles.infoText}>📍 Mesafe: 2.5 km</Text>
          <Text style={styles.infoText}>⏰ Sefer: Her 30 dakikada</Text>
          <Text style={styles.infoText}>🕐 İlk Sefer: 07:00</Text>
          <Text style={styles.infoText}>🕐 Son Sefer: 22:00</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
