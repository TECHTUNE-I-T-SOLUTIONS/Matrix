import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to the Onboarding screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/AppLogo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200ee', // Background color of the splash screen
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default SplashScreen;