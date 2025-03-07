import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/OnboardingBackground.png')}
      style={styles.background}
    >
      {/* Dark overlay */}
      <View style={styles.overlay} />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RegularUser')}
        >
          <Text style={styles.buttonText}>Regular User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Merchant')}
        >
          <Text style={styles.buttonText}>Merchant</Text>
        </TouchableOpacity>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Matrix v.1</Text>
        <Text style={styles.footerText}>© 2025 Matrix. All rights reserved.</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#6200ee', // Purple color
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OnboardingScreen;