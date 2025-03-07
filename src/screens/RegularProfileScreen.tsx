import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from '../components/BottomNavigation';
import Loader from '../components/Loader';
import { useNavigation } from '@react-navigation/native';

const PRIMARY_PURPLE = '#2E0063';
const LIGHT_TEXT = '#FFFFFF';
const DARK_TEXT = '#333333';
const CARD_BACKGROUND = '#FFFFFF';

const RegularProfileScreen = () => {
  const navigation = useNavigation();

  // States for toggling sections
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showSetUsername, setShowSetUsername] = useState(false);
  const [showAppTheme, setShowAppTheme] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Placeholder functions for actions
  const handleSaveProfile = () => {
    // Implement save profile functionality
  };

  const handleUpdatePassword = () => {
    // Implement update password functionality
  };

  const handleSetUsername = () => {
    // Implement set username functionality
  };

  const handleThemeChange = (theme: 'light' | 'dark') => {
    // Implement theme switch functionality
  };

  const handleLogout = () => {
    // Show loader, then navigate to RegularUser screen after delay
    setIsLoggingOut(true);
    setTimeout(() => {
      setIsLoggingOut(false);
      navigation.navigate('RegularUser');
    }, 2000);
  };

  // Render the Loader if logging out
  if (isLoggingOut) {
    return <Loader />;
  }

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
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Current Balance</Text>
          <Text style={styles.balanceValue}>₦2,500.00</Text>
        </View>

        {/* Edit Profile Section */}
        <TouchableOpacity
          style={styles.cardHeader}
          onPress={() => setShowEditProfile(!showEditProfile)}
        >
          <Text style={styles.sectionTitle}>Edit Profile</Text>
          <Ionicons
            name={showEditProfile ? 'chevron-down' : 'chevron-forward'}
            size={20}
            color={DARK_TEXT}
          />
        </TouchableOpacity>
        {showEditProfile && (
          <View style={styles.card}>
            <View style={styles.inputRow}>
              <Ionicons
                name="person-outline"
                size={20}
                color={PRIMARY_PURPLE}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#999"
              />
            </View>
            <View style={styles.inputRow}>
              <Ionicons
                name="mail-outline"
                size={20}
                color={PRIMARY_PURPLE}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputRow}>
              <Ionicons
                name="call-outline"
                size={20}
                color={PRIMARY_PURPLE}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSaveProfile}
            >
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Change Password Section */}
        <TouchableOpacity
          style={styles.cardHeader}
          onPress={() => setShowChangePassword(!showChangePassword)}
        >
          <Text style={styles.sectionTitle}>Change Password</Text>
          <Ionicons
            name={showChangePassword ? 'chevron-down' : 'chevron-forward'}
            size={20}
            color={DARK_TEXT}
          />
        </TouchableOpacity>
        {showChangePassword && (
          <View style={styles.card}>
            <View style={styles.inputRow}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color={PRIMARY_PURPLE}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Current Password"
                placeholderTextColor="#999"
                secureTextEntry
              />
            </View>
            <View style={styles.inputRow}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color={PRIMARY_PURPLE}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor="#999"
                secureTextEntry
              />
            </View>
            <View style={styles.inputRow}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color={PRIMARY_PURPLE}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm New Password"
                placeholderTextColor="#999"
                secureTextEntry
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleUpdatePassword}
            >
              <Text style={styles.buttonText}>Update Password</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Set Username Section */}
        <TouchableOpacity
          style={styles.cardHeader}
          onPress={() => setShowSetUsername(!showSetUsername)}
        >
          <Text style={styles.sectionTitle}>Set Username</Text>
          <Ionicons
            name={showSetUsername ? 'chevron-down' : 'chevron-forward'}
            size={20}
            color={DARK_TEXT}
          />
        </TouchableOpacity>
        {showSetUsername && (
          <View style={styles.card}>
            <View style={styles.inputRow}>
              <Ionicons
                name="person-circle-outline"
                size={20}
                color={PRIMARY_PURPLE}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#999"
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSetUsername}
            >
              <Text style={styles.buttonText}>Set Username</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* App Theme Section */}
        <TouchableOpacity
          style={styles.cardHeader}
          onPress={() => setShowAppTheme(!showAppTheme)}
        >
          <Text style={styles.sectionTitle}>App Theme</Text>
          <Ionicons
            name={showAppTheme ? 'chevron-down' : 'chevron-forward'}
            size={20}
            color={DARK_TEXT}
          />
        </TouchableOpacity>
        {showAppTheme && (
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.themeButton}
              onPress={() => handleThemeChange('light')}
            >
              <Text style={styles.themeButtonText}>Light Theme</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.themeButton}
              onPress={() => handleThemeChange('dark')}
            >
              <Text style={styles.themeButtonText}>Dark Theme</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>

        {/* Extra spacing */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNavigationContainer}>
        <BottomNavigation navigation={navigation} />
      </View>
    </View>
  );
};

export default RegularProfileScreen;

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
    flexGrow: 1,
    padding: 20,
    paddingTop: 60,
    paddingBottom: 80,
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
  /********** CARD HEADER FOR COLLAPSIBLE SECTIONS **********/
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: CARD_BACKGROUND,
    borderRadius: 12,
    marginBottom: 5,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: DARK_TEXT,
  },
  /********** CARD STYLE **********/
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
  /********** BUTTONS **********/
  button: {
    backgroundColor: PRIMARY_PURPLE,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: LIGHT_TEXT,
    fontWeight: 'bold',
  },
  themeButton: {
    backgroundColor: '#fafafa',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  themeButtonText: {
    fontSize: 16,
    color: PRIMARY_PURPLE,
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
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
