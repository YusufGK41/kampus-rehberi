import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function IletisimSayfasi({ navigation }: any) {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <Text style={styles.pageTitle}>📞 İletişim</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Öğrenci İşleri</Text>
          <Text style={styles.infoText}>📞 0324 521 00 01</Text>
          <Text style={styles.infoText}>✉️ ogrenciisleri@mersin.edu.tr</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Bilgi İşlem</Text>
          <Text style={styles.infoText}>📞 0324 521 00 02</Text>
          <Text style={styles.infoText}>✉️ bilgiislem@mersin.edu.tr</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Acil Durum</Text>
          <Text style={styles.infoText}>🚨 Güvenlik: 0324 521 00 99</Text>
          <Text style={styles.infoText}>🏥 Sağlık: 0324 521 00 88</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
