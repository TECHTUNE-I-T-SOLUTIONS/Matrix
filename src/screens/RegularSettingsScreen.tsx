import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from '../components/BottomNavigation';
import MenuModal from '../components/MenuModal';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';

const PRIMARY_PURPLE = '#2E0063';
const LIGHT_TEXT = '#FFFFFF';
const DARK_TEXT = '#333333';
const CARD_BACKGROUND = '#F9F9F9';

const RegularSettingsScreen = () => {
  const navigation = useNavigation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={26} color={LIGHT_TEXT} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setMenuVisible(true)}
        >
          <Ionicons name="menu" size={26} color={LIGHT_TEXT} />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Account Settings */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Account Settings</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Update Profile</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_PURPLE} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Change Password</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_PURPLE} />
          </TouchableOpacity>
        </View>

        {/* Notification Settings */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Notifications</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Email Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_PURPLE} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Push Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_PURPLE} />
          </TouchableOpacity>
        </View>

        {/* Theme Settings */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>App Theme</Text>
          <View style={styles.themeOption}>
            <Text style={styles.optionText}>
              {theme === 'dark' ? 'Dark Theme' : 'Light Theme'}
            </Text>
            <Switch
              value={theme === 'dark'}
              onValueChange={toggleTheme}
              thumbColor={PRIMARY_PURPLE}
            />
          </View>
        </View>

        {/* Legal */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Legal</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Privacy Policy</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_PURPLE} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Terms & Conditions</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_PURPLE} />
          </TouchableOpacity>
        </View>

        {/* Help & Support */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Help & Support</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>FAQ</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_PURPLE} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Contact Support</Text>
            <Ionicons name="chevron-forward" size={20} color={PRIMARY_PURPLE} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNavigationContainer}>
        <BottomNavigation navigation={navigation} />
      </View>

      {/* Menu Modal */}
      <MenuModal visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </View>
  );
};

export default RegularSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
  headerContainer: {
    backgroundColor: PRIMARY_PURPLE,
    paddingTop: 50,
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
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
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
