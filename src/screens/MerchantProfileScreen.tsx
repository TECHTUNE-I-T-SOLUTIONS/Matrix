// src/screens/MerchantProfileScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import MerchantBottomNavigation from '../components/MerchantBottomNavigation';
import MerchantMenuModal from '../components/MerchantMenuModal';

const PRIMARY_COLOR = '#2E0063';
const LIGHT_TEXT = '#FFFFFF';
const DARK_TEXT = '#333333';
const CARD_BACKGROUND = '#FFFFFF';

const MerchantProfileScreen = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [editing, setEditing] = useState(false);
  const [storeName, setStoreName] = useState('My Merchant Store');
  const [email, setEmail] = useState('merchant@example.com');
  const [phone, setPhone] = useState('+1234567890');

  const handleSave = () => {
    // Implement saving profile changes here
    setEditing(false);
    console.log('Profile saved:', storeName, email, phone);
  };

  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient
        colors={['#0f2027', '#203a43', '#2c5364']}
        style={styles.headerContainer}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Merchant Profile</Text>
          <TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Profile Details Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Profile Details</Text>
          <View style={styles.profileRow}>
            <Text style={styles.label}>Store Name:</Text>
            {editing ? (
              <TextInput
                style={styles.input}
                value={storeName}
                onChangeText={setStoreName}
                placeholder="Store Name"
                placeholderTextColor="#999"
              />
            ) : (
              <Text style={styles.value}>{storeName}</Text>
            )}
          </View>
          <View style={styles.profileRow}>
            <Text style={styles.label}>Email:</Text>
            {editing ? (
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor="#999"
              />
            ) : (
              <Text style={styles.value}>{email}</Text>
            )}
          </View>
          <View style={styles.profileRow}>
            <Text style={styles.label}>Phone:</Text>
            {editing ? (
              <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholder="Phone Number"
                placeholderTextColor="#999"
              />
            ) : (
              <Text style={styles.value}>{phone}</Text>
            )}
          </View>
          <View style={styles.buttonRow}>
            {editing ? (
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Save Changes</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.editButton} onPress={() => setEditing(true)}>
                <Text style={styles.buttonText}>Edit Profile</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Additional Merchant Options */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Other Options</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>View Sales Reports</Text>
            <Ionicons name="chevron-forward" size={20} color="#2c5364" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Manage Products</Text>
            <Ionicons name="chevron-forward" size={20} color="#2c5364" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Settings</Text>
            <Ionicons name="chevron-forward" size={20} color="#2c5364" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Logout</Text>
            <Ionicons name="log-out" size={20} color="#2c5364" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNavigationContainer}>
        <MerchantBottomNavigation navigation={navigation} />
      </View>

      {/* Merchant Menu Modal */}
      <MerchantMenuModal visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </View>
  );
};

export default MerchantProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  /********** HEADER **********/
  headerContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  menuButton: {
    padding: 5,
  },
  /********** SCROLL CONTENT **********/
  scrollContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: CARD_BACKGROUND,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: DARK_TEXT,
    marginBottom: 15,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: PRIMARY_COLOR,
    width: 100,
  },
  input: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 8,
    borderRadius: 8,
    fontSize: 14,
    color: DARK_TEXT,
  },
  value: {
    flex: 1,
    fontSize: 14,
    color: DARK_TEXT,
  },
  buttonRow: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  editButton: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  saveButton: {
    backgroundColor: '#00C853',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: LIGHT_TEXT,
    fontSize: 14,
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 14,
    color: DARK_TEXT,
  },
  /********** BOTTOM NAVIGATION **********/
  bottomNavigationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
