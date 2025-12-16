import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

function App() {
  // TEK useState - Tüm butonların durumu
  const [tiklananlar, setTiklananlar] = useState({
    kampus: false,
    yurt: false,
    ulasim: false,
    yemekhane: false,
    sss: false,
    iletisim: false,
  });

  // Fonksiyonlar
  const handleKampusPress = () => {
    setTiklananlar({ ...tiklananlar, kampus: true });
    Alert.alert('Kampüs', 'Kampüs sayfasına gidiyoruz!');
  };

  const handleYurtPress = () => {
    setTiklananlar({ ...tiklananlar, yurt: true });
    Alert.alert('Yurt', 'Yurt sayfasına gidiyoruz!');
  };

  const handleUlasimPress = () => {
    setTiklananlar({ ...tiklananlar, ulasim: true });
    Alert.alert('Ulaşım', 'Ulaşım sayfasına gidiyoruz!');
  };

  const handleYemekhanePress = () => {
    setTiklananlar({ ...tiklananlar, yemekhane: true });
    Alert.alert('Yemekhane', 'Yemekhane menüsüne gidiyoruz!');
  };

  const handleSSSPress = () => {
    setTiklananlar({ ...tiklananlar, sss: true });
    Alert.alert('SSS', 'Sık sorulan sorulara gidiyoruz!');
  };

  const handleIletisimPress = () => {
    setTiklananlar({ ...tiklananlar, iletisim: true });
    Alert.alert('İletişim', 'İletişim bilgilerine gidiyoruz!');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Satır */}
      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.box,
            { backgroundColor: tiklananlar.kampus ? '#2ecc71' : '#3498db' },
          ]}
          onPress={handleKampusPress}
          activeOpacity={0.7}
        >
          <Text style={styles.boxText}>
            🏫 Kampüs {tiklananlar.kampus ? '✅' : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.box,
            { backgroundColor: tiklananlar.yurt ? '#2ecc71' : '#3498db' },
          ]}
          onPress={handleYurtPress}
          activeOpacity={0.7}
        >
          <Text style={styles.boxText}>
            🏠 Yurt {tiklananlar.yurt ? '✅' : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.box,
            { backgroundColor: tiklananlar.ulasim ? '#2ecc71' : '#3498db' },
          ]}
          onPress={handleUlasimPress}
          activeOpacity={0.7}
        >
          <Text style={styles.boxText}>
            🚌 Ulaşım {tiklananlar.ulasim ? '✅' : ''}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 2. Satır */}
      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.box,
            { backgroundColor: tiklananlar.yemekhane ? '#2ecc71' : '#3498db' },
          ]}
          onPress={handleYemekhanePress}
          activeOpacity={0.7}
        >
          <Text style={styles.boxText}>
            🍽️ Yemekhane {tiklananlar.yemekhane ? '✅' : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.box,
            { backgroundColor: tiklananlar.sss ? '#2ecc71' : '#3498db' },
          ]}
          onPress={handleSSSPress}
          activeOpacity={0.7}
        >
          <Text style={styles.boxText}>
            ❓ SSS {tiklananlar.sss ? '✅' : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.box,
            { backgroundColor: tiklananlar.iletisim ? '#2ecc71' : '#3498db' },
          ]}
          onPress={handleIletisimPress}
          activeOpacity={0.7}
        >
          <Text style={styles.boxText}>
            📞 İletişim {tiklananlar.iletisim ? '✅' : ''}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },

  box: {
    width: '30%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  boxText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
