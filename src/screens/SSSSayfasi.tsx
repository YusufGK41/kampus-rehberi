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
          <Text style={styles.infoTitle}>
            Yemekhane kartı nerede çıkarılır?
          </Text>
          <Text style={styles.infoText}>
            Yemekhane girişindeki bürodan çıkarılır.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Kampüste internet var mı?</Text>
          <Text style={styles.infoText}>Evet, eduroam ağı mevcuttur.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
