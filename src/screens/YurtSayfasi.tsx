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
          <Text style={styles.infoTitle}>KYK Erdemli Kızkalesi Yurdu</Text>
          <Text style={styles.infoText}>
            📍 Adres: Akdeniz Mahallesi Erenler Sokak No:60/A Erdemli/Mersin
          </Text>
          <Text style={styles.infoText}>📞 Telefon: 0324 515 22 48</Text>
          <Text style={styles.infoText}>📏 Yüksekokuldan Uzaklık: 3.2 km</Text>
          <Text style={styles.infoText}>
            💰 Aylık Ücret: 1.000 TL (2025-26)
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Oda Özellikleri</Text>
          <Text style={styles.infoText}>• 4 kişilik odalar</Text>
          <Text style={styles.infoText}>• Çalışma masası</Text>
          <Text style={styles.infoText}>• Tuvalet ve banyo</Text>
          <Text style={styles.infoText}>• Mini buzdolabı</Text>
          <Text style={styles.infoText}>• Komidin ve elbise dolabı</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Başvuru</Text>
          <Text style={styles.infoText}>
            Başvurular e-devlet üzerinden yapılmaktadır.
          </Text>
          <Text style={styles.infoText}>
            {'\n'}Yurda yerleşemeyen öğrenciler yurt müdürlüğü ile iletişime
            geçebilir.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
