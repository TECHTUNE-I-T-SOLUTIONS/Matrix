// src/screens/MerchantDisputeScreen.tsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import MerchantBottomNavigation from '../components/MerchantBottomNavigation';
import MerchantMenuModal from '../components/MerchantMenuModal';

const PRIMARY_PURPLE = '#2E0063';
const LIGHT_TEXT = '#FFFFFF';
const DARK_TEXT = '#333333';
const CARD_BACKGROUND = '#FFFFFF';

const MerchantDisputeScreen = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [transactionType, setTransactionType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Implement your dispute submission logic here
    console.log('Dispute submitted:', transactionType, description);
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
          <Text style={styles.headerTitle}>Merchant Disputes</Text>
          <TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Optional Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Current Balance</Text>
          <Text style={styles.balanceValue}>₦2,500.00</Text>
        </View>

        {/* Dispute Form Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Raise a Dispute</Text>

          <Text style={styles.label}>Specify Dispute Category</Text>
          <View style={styles.inputRow}>
            <Ionicons 
              name="document-text-outline" 
              size={20} 
              color="#2c5364" 
              style={styles.inputIcon} 
            />
            <TextInput
              style={styles.input}
              placeholder="Transaction Type"
              placeholderTextColor="#999"
              value={transactionType}
              onChangeText={setTransactionType}
            />
          </View>

          <Text style={styles.label}>Description</Text>
          <View style={styles.inputRow}>
            <Ionicons 
              name="chatbox-ellipses-outline" 
              size={20} 
              color="#2c5364" 
              style={styles.inputIcon} 
            />
            <TextInput
              style={[styles.input, styles.multilineInput]}
              placeholder="Enter dispute details..."
              placeholderTextColor="#999"
              multiline
              value={description}
              onChangeText={setDescription}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNavigationContainer}>
        <MerchantBottomNavigation navigation={navigation} />
      </View>

      {/* Merchant Menu Modal */}
      <MerchantMenuModal 
        visible={menuVisible} 
        onClose={() => setMenuVisible(false)} 
      />
    </View>
  );
};

export default MerchantDisputeScreen;

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
    color: '#333',
    marginBottom: 5,
    opacity: 0.7,
  },
  balanceValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
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
  label: {
    fontSize: 16,
    color: '#2c5364',
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
    backgroundColor: '#2c5364',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  /********** BOTTOM NAVIGATION **********/
  bottomNavigationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
