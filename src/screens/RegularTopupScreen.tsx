import React from 'react';
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
import BottomNavigation from '../components/BottomNavigation';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

/* Reuse your brand color constants for consistency */
const PRIMARY_PURPLE = '#2E0063';
const LIGHT_TEXT = '#FFFFFF';
const DARK_TEXT = '#333333';
const CARD_BACKGROUND = '#FFFFFF';

const RegularTopupScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={26} color={LIGHT_TEXT} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Top-Up</Text>
      </View>

      {/* Main Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Current Balance</Text>
          <Text style={styles.balanceValue}>₦2,500.00</Text>
        </View>

        {/* Airtime Top-Up Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Airtime Top-Up</Text>

          {/* PHONE NUMBER */}
          <View style={styles.inputRow}>
            <Ionicons
              name="call-outline"
              size={20}
              color={PRIMARY_PURPLE}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="PHONE NUMBER"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
          </View>

          {/* AMOUNT */}
          <View style={styles.inputRow}>
            <Ionicons
              name="cash-outline"
              size={20}
              color={PRIMARY_PURPLE}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="AMOUNT"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
          </View>

          {/* NETWORK */}
          <View style={styles.inputRow}>
            <Ionicons
              name="cellular-outline"
              size={20}
              color={PRIMARY_PURPLE}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="NETWORK"
              placeholderTextColor="#999"
            />
          </View>

          {/* Quick Amount Options */}
          <View style={styles.quickOptionsContainer}>
            <Text style={styles.quickOptionsTitle}>Quick Amounts</Text>
            <View style={styles.quickOptions}>
              {['100', '200', '500', '1000', '1500', '2000', '3000', '5000'].map(
                (amount) => (
                  <TouchableOpacity key={amount} style={styles.quickOption}>
                    <Text style={styles.quickOptionText}>{amount}</Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>

          {/* Proceed Button */}
          <TouchableOpacity style={styles.proceedButton}>
            <Text style={styles.proceedButtonText}>PROCEED</Text>
          </TouchableOpacity>
        </View>

        {/* Spacing at the bottom to avoid overlap with BottomNavigation */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNavigationContainer}>
        <BottomNavigation navigation={navigation} />
      </View>
    </View>
  );
};

export default RegularTopupScreen;

const styles = StyleSheet.create({
  /********** CONTAINER & HEADER **********/
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1', // Light background for the whole screen
  },
  headerContainer: {
    backgroundColor: PRIMARY_PURPLE,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: LIGHT_TEXT,
  },

  /********** SCROLL CONTENT **********/
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  /********** BALANCE CARD **********/
  balanceCard: {
    backgroundColor: CARD_BACKGROUND,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    // optional shadow
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    alignItems: 'center',
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

  /********** MAIN CARD FOR TOP-UP **********/
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

  /********** INPUT ROWS **********/
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

  /********** QUICK OPTIONS **********/
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
    backgroundColor: PRIMARY_PURPLE,
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

  /********** PROCEED BUTTON **********/
  proceedButton: {
    backgroundColor: PRIMARY_PURPLE,
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
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
});
