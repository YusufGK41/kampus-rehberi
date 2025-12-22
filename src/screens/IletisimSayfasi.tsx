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
          <Text style={styles.infoTitle}>Yüksekokul Sekreterlik</Text>
          <Text style={styles.infoText}>📞 +90 324 515 6074 / 112</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Yüksekokul Müdürlük</Text>
          <Text style={styles.infoText}>📞 +90 324 324 515 6074-150</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>KYK Yurt Müdürlüğü</Text>
          <Text style={styles.infoText}>📞 0324 515 22 48</Text>
          <Text style={styles.infoText}>
            📍 Akdeniz Mah. Erenler Sk. No:60/A Erdemli/Mersin
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Güvenlik</Text>
          <Text style={styles.infoText}>
            Yüksekokulumuzun güvenliği özel ve resmi görevliler tarafından
            sağlanmaktadır.
          </Text>
          <Text style={styles.infoText}>
            {'\n'}Herhangi bir güvenlik sorunu için yüksekokul yönetimine
            başvurabilirsiniz.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
