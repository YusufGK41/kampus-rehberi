import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function YemekhaneSayfasi({ navigation }: any) {
  const openYemekhaneLink = () => {
    Linking.openURL(
      'https://mersin.edu.tr/idari/saglik-kultur-ve-spor-daire-baskanligi/hizmetlerimiz/kurum-yemekhane-hizmetleri',
    );
  };

  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <Text style={styles.pageTitle}>🍽️ Yemekhane</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Yemekhane Bilgileri</Text>
          <Text style={styles.infoText}>
            Yemekhane güncel menü ve ücretlendirme bilgileri üniversite web
            sitesinde paylaşılmaktadır.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Ödeme Sistemi</Text>
          <Text style={styles.infoText}>
            Yeni sistem: Yapı Kredi ile anlaşma yapılmıştır.
          </Text>
          <Text style={styles.infoText}>
            {'\n'}Eskiden öğrenci kartına yükleme yapılıyordu, yeni sistem için
            detayları web sitesinden öğrenebilirsiniz.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Güncel Bilgiler İçin</Text>
          <TouchableOpacity onPress={openYemekhaneLink}>
            <Text
              style={[
                styles.infoText,
                { color: '#3498db', textDecorationLine: 'underline' },
              ]}
            >
              🔗 Yemekhane web sayfasını ziyaret edin
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
