// src/screens/RegularLoginScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Loader from '../components/Loader';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../supabaseClient';

const RegularLoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signIn({
      email,
      password,
    });
    setLoading(false);

    if (error) {
      Alert.alert('Login Error', error.message);
    } else {
      navigation.navigate('RegularHome');
    }
  };

  if (loading) {
    return <Loader transparent />;
  }

  return (
    <ImageBackground
      source={require('../../assets/images/LoginBackground.png')}
      style={styles.background}
    >
      {/* Dark overlay */}
      <View style={styles.overlay} />
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={35} color="#fff" />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RegularForgot')}>
          <Text style={styles.linkText}>Forgot Password?</Text>
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

export default RegularLoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 20,
    zIndex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#6200ee',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
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
    fontSize: 14,
  },
});
