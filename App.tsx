import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Sayfaları import et
import AnaSayfa from './src/screens/AnaSayfa';
import KampusSayfasi from './src/screens/KampusSayfasi';
import YurtSayfasi from './src/screens/YurtSayfasi';
import UlasimSayfasi from './src/screens/UlasimSayfasi';
import YemekhaneSayfasi from './src/screens/YemekhaneSayfasi';
import SSSSayfasi from './src/screens/SSSSayfasi';
import IletisimSayfasi from './src/screens/IletisimSayfasi';

const Stack = createNativeStackNavigator();

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

export default App;
