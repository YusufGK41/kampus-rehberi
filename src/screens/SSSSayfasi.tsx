import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SSSSayfasi({ navigation }: any) {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <Text style={styles.pageTitle}>❓ Sık Sorulan Sorular</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Öğrenci kartı nasıl alınır?</Text>
          <Text style={styles.infoText}>
            Öğrenci İşleri'ne giderek başvuru yapabilirsiniz.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Mersin33 kartı nerede çıkarılır?</Text>
          <Text style={styles.infoText}>
            Hükümet Konağı'nın önünde Mersin33 kartı çıkartabilirsiniz.
          </Text>
          <Text style={styles.infoText}>
            {'\n'}Bu kart ile toplu taşımada indirimli yararlanabilirsiniz.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Yemekhane kartı nasıl alınır?</Text>
          <Text style={styles.infoText}>
            Yeni sistem için Yapı Kredi ile anlaşma yapılmıştır. Detaylar için
            yemekhane web sayfasını ziyaret edebilirsiniz.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Kampüste internet var mı?</Text>
          <Text style={styles.infoText}>
            Evet, eduroam ağı mevcuttur. Öğrenci bilgilerinizle
            bağlanabilirsiniz.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Yurda nasıl başvurulur?</Text>
          <Text style={styles.infoText}>
            Başvurular e-devlet üzerinden yapılmaktadır. Yurda yerleşemeyen
            öğrenciler 0324 515 22 48 numaralı telefondan yurt müdürlüğü ile
            iletişime geçebilir.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
