import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// ==================== ANA SAYFA ====================
function AnaSayfa({ navigation }: any) {
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

// ==================== KAMPÜS SAYFASI ====================
function KampusSayfasi({ navigation }: any) {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <Text style={styles.pageTitle}>🏫 Kampüs Bilgileri</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            Mersin Üniversitesi Erdemli Kampüsü
          </Text>
          <Text style={styles.infoText}>
            📍 Adres: Çaybaşı Mahallesi, 33730 Erdemli/Mersin
          </Text>
          <Text style={styles.infoText}>📞 Telefon: 0324 521 00 00</Text>
          <Text style={styles.infoText}>🌐 Web: www.mersin.edu.tr</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Fakülteler</Text>
          <Text style={styles.infoText}>• Fen Fakültesi</Text>
          <Text style={styles.infoText}>• Mühendislik Fakültesi</Text>
          <Text style={styles.infoText}>
            • İktisadi ve İdari Bilimler Fakültesi
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ==================== YURT SAYFASI ====================
function YurtSayfasi({ navigation }: any) {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <Text style={styles.pageTitle}>🏠 Yurt Bilgileri</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>KYK Erdemli Erkek Öğrenci Yurdu</Text>
          <Text style={styles.infoText}>📍 Mesafe: 2.5 km</Text>
          <Text style={styles.infoText}>📞 Telefon: 0324 XXX XX XX</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>KYK Erdemli Kız Öğrenci Yurdu</Text>
          <Text style={styles.infoText}>📍 Mesafe: 3 km</Text>
          <Text style={styles.infoText}>📞 Telefon: 0324 XXX XX XX</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ==================== ULAŞIM SAYFASI ====================
function UlasimSayfasi({ navigation }: any) {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <Text style={styles.pageTitle}>🚌 Ulaşım Bilgileri</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>156 - 170 - 177 Numaralı Hatlar</Text>
          <Text style={styles.infoText}>
            🚌 Güzergah: Erdemli Merkez - Kampüs
          </Text>
          <Text style={styles.infoText}>📍 Mesafe: 2.5 km</Text>
          <Text style={styles.infoText}>⏰ Sefer: Her 30 dakikada</Text>
          <Text style={styles.infoText}>🕐 İlk Sefer: 07:00</Text>
          <Text style={styles.infoText}>🕐 Son Sefer: 22:00</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ==================== YEMEKHANE SAYFASI ====================
function YemekhaneSayfasi({ navigation }: any) {
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

// ==================== SSS SAYFASI ====================
function SSSSayfasi({ navigation }: any) {
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

// ==================== İLETİŞİM SAYFASI ====================
function IletisimSayfasi({ navigation }: any) {
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

// ==================== ANA APP (NAVIGATOR) ====================
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Ana"
          component={AnaSayfa}
          options={{ title: 'Kampüs Rehberi' }}
        />
        <Stack.Screen
          name="Kampus"
          component={KampusSayfasi}
          options={{ title: 'Kampüs' }}
        />
        <Stack.Screen
          name="Yurt"
          component={YurtSayfasi}
          options={{ title: 'Yurt Bilgileri' }}
        />
        <Stack.Screen
          name="Ulasim"
          component={UlasimSayfasi}
          options={{ title: 'Ulaşım' }}
        />
        <Stack.Screen
          name="Yemekhane"
          component={YemekhaneSayfasi}
          options={{ title: 'Yemekhane' }}
        />
        <Stack.Screen
          name="SSS"
          component={SSSSayfasi}
          options={{ title: 'SSS' }}
        />
        <Stack.Screen
          name="Iletisim"
          component={IletisimSayfasi}
          options={{ title: 'İletişim' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ==================== STILLER ====================
const styles = StyleSheet.create({
  // Ana Sayfa Stilleri
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  scrollContent: {
    padding: 20,
  },

  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  box: {
    backgroundColor: '#3498db',
    width: '30%',
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  emoji: {
    fontSize: 36,
    marginBottom: 8,
  },

  boxText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Sayfa Stilleri
  pageContainer: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  pageContent: {
    padding: 20,
  },

  pageTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 30,
  },

  infoCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },

  infoText: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 8,
    lineHeight: 24,
  },
});

export default App;
