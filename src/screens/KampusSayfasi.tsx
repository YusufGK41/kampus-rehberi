import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function KampusSayfasi({ navigation }: any) {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <Text style={styles.pageTitle}>🏫 Kampüs Bilgileri</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            Mersin Üniversitesi Erdemli Kampüsü
          </Text>
          <Text style={styles.infoText}>
            📍 Adres: Çaybaşı Mahallesi, 33730 Erdemli/Mersin
          </Text>
          <Text style={styles.infoText}>📞 Telefon: 0324 521 00 00</Text>
          <Text style={styles.infoText}>🌐 Web: www.mersin.edu.tr</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Fakülteler</Text>
          <Text style={styles.infoText}>• Fen Fakültesi</Text>
          <Text style={styles.infoText}>• Mühendislik Fakültesi</Text>
          <Text style={styles.infoText}>
            • İktisadi ve İdari Bilimler Fakültesi
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
