import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AnaSayfa({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>🎓 Kampüs Rehberi</Text>
          <Text style={styles.subtitle}>Mersin Üniversitesi Erdemli</Text>
        </View>

        {/* 1. Satır */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('Kampus')}
            activeOpacity={0.7}
          >
            <Text style={styles.emoji}>🏫</Text>
            <Text style={styles.boxText}>Kampüs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('Yurt')}
            activeOpacity={0.7}
          >
            <Text style={styles.emoji}>🏠</Text>
            <Text style={styles.boxText}>Yurt</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('Ulasim')}
            activeOpacity={0.7}
          >
            <Text style={styles.emoji}>🚌</Text>
            <Text style={styles.boxText}>Ulaşım</Text>
          </TouchableOpacity>
        </View>

        {/* 2. Satır */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('Yemekhane')}
            activeOpacity={0.7}
          >
            <Text style={styles.emoji}>🍽️</Text>
            <Text style={styles.boxText}>Yemekhane</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('SSS')}
            activeOpacity={0.7}
          >
            <Text style={styles.emoji}>❓</Text>
            <Text style={styles.boxText}>SSS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('Iletisim')}
            activeOpacity={0.7}
          >
            <Text style={styles.emoji}>📞</Text>
            <Text style={styles.boxText}>İletişim</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
