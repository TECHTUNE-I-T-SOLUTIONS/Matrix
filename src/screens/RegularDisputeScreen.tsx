import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BottomNavigation from '../components/BottomNavigation';

const PRIMARY_PURPLE = '#2E0063';
const LIGHT_TEXT = '#FFFFFF';
const DARK_TEXT = '#333333';
const CARD_BACKGROUND = '#FFFFFF';

const RegularDisputeScreen = () => {
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
        <Text style={styles.headerTitle}>Disputes</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Current Balance</Text>
          <Text style={styles.balanceValue}>₦2,500.00</Text>
        </View>

        {/* Dispute Form Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Raise a Dispute</Text>

          <Text style={styles.label}>Specify Dispute Category</Text>
          <View style={styles.inputRow}>
            <Ionicons name="document-text-outline" size={20} color={PRIMARY_PURPLE} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Transaction Type"
              placeholderTextColor="#999"
            />
          </View>

          <Text style={styles.label}>Description</Text>
          <View style={styles.inputRow}>
            <Ionicons name="chatbox-ellipses-outline" size={20} color={PRIMARY_PURPLE} style={styles.inputIcon} />
            <TextInput
              style={[styles.input, styles.multilineInput]}
              placeholder="Enter dispute details..."
              placeholderTextColor="#999"
              multiline
            />
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNavigationContainer}>
        <BottomNavigation navigation={navigation} />
      </View>
    </View>
  );
};

export default RegularDisputeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  /********** HEADER **********/
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
  /********** FORM CARD **********/
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
  label: {
    fontSize: 16,
    color: PRIMARY_PURPLE,
    marginBottom: 10,
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
  multilineInput: {
    height: 90,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: PRIMARY_PURPLE,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    fontSize: 16,
    color: LIGHT_TEXT,
    fontWeight: 'bold',
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
