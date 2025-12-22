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
          <Text style={styles.infoTitle}>Büyükşehir Belediye Otobüsleri</Text>
          <Text style={styles.infoText}>🚌 156 Nolu Hat</Text>
          <Text style={styles.infoText}>🚌 170 Nolu Hat</Text>
          <Text style={styles.infoText}>
            {'\n'}📍 Güzergah: Mersin - Erdemli
          </Text>
          <Text style={styles.infoText}>
            {'\n'}💳 Öğrenci kimliği ile indirimli yararlanabilirsiniz.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>177 Nolu Hat - DİKKAT!</Text>
          <Text style={styles.infoText}>⚠️ Yurttan okula doğru geçer</Text>
          <Text style={styles.infoText}>
            ⚠️ Okuldan geldiğinde yurda gitmez
          </Text>
          <Text style={styles.infoText}>
            {'\n'}📱 Sefer saatleri için Mersin Ulaşım uygulamasını
            kullanabilirsiniz.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Özel Minibüsler</Text>
          <Text style={styles.infoText}>🚐 MES-KOOP</Text>
          <Text style={styles.infoText}>🚐 Kocahasanlı</Text>
          <Text style={styles.infoText}>🚐 Silifke KOOP</Text>
          <Text style={styles.infoText}>
            {'\n'}Kampüs anayol üzerinde olduğu için ulaşım kolaydır.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Not</Text>
          <Text style={styles.infoText}>
            ⚠️ Bazen otobüs arıza yapabilir, alternatif güzergahlar öğrenmeniz
            faydalı olacaktır.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
