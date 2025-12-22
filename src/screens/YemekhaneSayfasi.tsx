import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function YemekhaneSayfasi({ navigation }: any) {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <Text style={styles.pageTitle}>🍽️ Yemekhane Menüsü</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Bugünkü Menü</Text>
          <Text style={styles.infoText}>🥣 Çorba: Mercimek Çorbası</Text>
          <Text style={styles.infoText}>🍗 Ana Yemek: Tavuk Sote</Text>
          <Text style={styles.infoText}>🍚 Pilav: Bulgur Pilavı</Text>
          <Text style={styles.infoText}>🥗 Salata: Mevsim Salatası</Text>
          <Text style={styles.infoText}>🍮 Tatlı: Sütlaç</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Yemek Saatleri</Text>
          <Text style={styles.infoText}>🕐 Öğle: 11:30 - 14:00</Text>
          <Text style={styles.infoText}>🕐 Akşam: 17:00 - 19:30</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
