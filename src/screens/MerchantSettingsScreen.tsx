// src/screens/MerchantSettingsScreen.tsx
import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import MerchantBottomNavigation from '../components/MerchantBottomNavigation';
import MerchantMenuModal from '../components/MerchantMenuModal';
// Optionally, if you use a global theme, import your ThemeContext here
// import { ThemeContext } from '../context/ThemeContext';

const PRIMARY_COLOR = '#2c5364'; // Merchant primary color
const LIGHT_TEXT = '#FFFFFF';
const DARK_TEXT = '#333333';
const CARD_BACKGROUND = '#F9F9F9';

const MerchantSettingsScreen = () => {
  const navigation = useNavigation();
  // For now, use local state. Later you can replace this with your global theme context.
  const [menuVisible, setMenuVisible] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    // Extend here to update your global theme context if needed.
  };

  return (
    <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
      {/* Gradient Header */}
      <LinearGradient
        colors={['#0f2027', '#203a43', '#2c5364']}
        style={styles.headerContainer}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={26} color={LIGHT_TEXT} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Merchant Settings</Text>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setMenuVisible(true)}
          >
            <Ionicons name="menu" size={26} color={LIGHT_TEXT} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Account Settings */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Account Settings</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Update Store Info</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Change Password</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_COLOR} />
          </TouchableOpacity>
        </View>

        {/* Notification Settings */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Notifications</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Email Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Push Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_COLOR} />
          </TouchableOpacity>
        </View>

        {/* Theme Settings */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>App Theme</Text>
          <View style={styles.themeOption}>
            <Text style={styles.optionText}>
              {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
            </Text>
            <Switch
              value={isDarkTheme}
              onValueChange={toggleTheme}
              thumbColor={PRIMARY_COLOR}
            />
          </View>
        </View>

        {/* Legal */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Legal</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Privacy Policy</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Terms & Conditions</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_COLOR} />
          </TouchableOpacity>
        </View>

        {/* Help & Support */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Help & Support</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>FAQ</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Contact Support</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_COLOR} />
          </TouchableOpacity>
        </View>
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

export default MerchantSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
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
    color: LIGHT_TEXT,
  },
  menuButton: {
    padding: 5,
  },
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
  themeOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  bottomNavigationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
