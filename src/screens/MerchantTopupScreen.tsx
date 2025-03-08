// src/screens/MerchantTopupScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import MerchantBottomNavigation from '../components/MerchantBottomNavigation';
import MerchantMenuModal from '../components/MerchantMenuModal';

const { width } = Dimensions.get('window');

const PRIMARY_COLOR = '#2c5364'; // Merchant theme primary color
const LIGHT_TEXT = '#ffffff';
const DARK_TEXT = '#333333';
const CARD_BACKGROUND = '#ffffff'; // White background for form cards

const MerchantTopupScreen = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [network, setNetwork] = useState('');

  const handleTopup = () => {
    // Simulate top-up action logic here
    console.log('Topup with:', phone, amount, network);
  };

  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient
        colors={['#0f2027', '#203a43', '#2c5364']}
        style={styles.headerContainer}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color={LIGHT_TEXT} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Top-Up</Text>
        <TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(true)}>
          <Ionicons name="menu" size={26} color={LIGHT_TEXT} />
        </TouchableOpacity>
      </LinearGradient>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Current Balance</Text>
          <Text style={styles.balanceValue}>₦2,500.00</Text>
        </View>

        {/* Top-Up Form Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Airtime Top-Up</Text>

          <View style={styles.inputRow}>
            <Ionicons name="call-outline" size={20} color={PRIMARY_COLOR} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <View style={styles.inputRow}>
            <Ionicons name="cash-outline" size={20} color={PRIMARY_COLOR} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Amount"
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />
          </View>

          <View style={styles.inputRow}>
            <Ionicons name="cellular-outline" size={20} color={PRIMARY_COLOR} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Network"
              placeholderTextColor="#999"
              value={network}
              onChangeText={setNetwork}
            />
          </View>

          {/* Quick Amount Options */}
          <View style={styles.quickOptionsContainer}>
            <Text style={styles.quickOptionsTitle}>Quick Amounts</Text>
            <View style={styles.quickOptions}>
              {['100', '200', '500', '1000', '1500', '2000', '3000', '5000'].map((amt) => (
                <TouchableOpacity key={amt} style={styles.quickOption} onPress={() => setAmount(amt)}>
                  <Text style={styles.quickOptionText}>{amt}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity style={styles.proceedButton} onPress={handleTopup}>
            <Text style={styles.proceedButtonText}>PROCEED</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
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

export default MerchantTopupScreen;

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: LIGHT_TEXT,
  },
  menuButton: {
    padding: 5,
  },
  /********** SCROLL CONTENT **********/
  scrollContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  balanceCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  balanceLabel: {
    fontSize: 14,
    color: DARK_TEXT,
    marginBottom: 5,
    opacity: 0.7,
  },
  balanceValue: {
    fontSize: 20,
    fontWeight: '700',
    color: DARK_TEXT,
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: DARK_TEXT,
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 14,
    color: DARK_TEXT,
  },
  quickOptionsContainer: {
    marginBottom: 20,
  },
  quickOptionsTitle: {
    fontSize: 14,
    color: DARK_TEXT,
    fontWeight: '600',
    marginBottom: 10,
  },
  quickOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickOption: {
    width: '23%',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  quickOptionText: {
    color: LIGHT_TEXT,
    fontSize: 14,
    fontWeight: '600',
  },
  proceedButton: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  proceedButtonText: {
    fontSize: 14,
    color: LIGHT_TEXT,
    fontWeight: '600',
  },
  /********** BOTTOM NAVIGATION **********/
  bottomNavigationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
