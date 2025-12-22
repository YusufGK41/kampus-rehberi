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
            Mersin Üniversitesi Erdemli Uygulamalı Teknoloji ve İşletmecilik
            Yüksekokulu
          </Text>
          <Text style={styles.infoText}>
            📍 Adres: Alata Mah. Alparslan Türkeş Bul. No:1 Erdemli/Mersin
          </Text>
          <Text style={styles.infoText}>
            📞 Sekreterlik: +90 324 515 6074 / 112
          </Text>
          <Text style={styles.infoText}>
            📞 Müdürlük: +90 324 324 515 6074-150
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Bölümler</Text>
          <Text style={styles.infoText}>
            • Bilişim Sistemleri ve Teknolojileri (4 yıl)
          </Text>
          <Text style={styles.infoText}>
            • Yönetim Bilişim Sistemleri (4 yıl)
          </Text>
          <Text style={styles.infoText}>• Turizm İşletmeciliği</Text>
          <Text style={styles.infoText}>• Bankacılık ve Sigortacılık</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Hakkında</Text>
          <Text style={styles.infoText}>
            2005 yılında kurulan yüksekokulumuz, devlet üniversiteleri içinde
            ilk yüksekokul olma özelliğine sahiptir.
          </Text>
          <Text style={styles.infoText}>
            {'\n'}İlk mezunlarını 2010 yılında vermiştir.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
