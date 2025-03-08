// src/screens/MerchantOffersScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import MerchantBottomNavigation from '../components/MerchantBottomNavigation';
import MerchantMenuModal from '../components/MerchantMenuModal';

const { width } = Dimensions.get('window');

const PRIMARY_COLOR = '#2c5364'; // Merchant theme primary color
const CARD_BACKGROUND = '#FFFFFF';
const LIGHT_TEXT = '#FFFFFF';
const DARK_TEXT = '#333333';

const MerchantOffersScreen = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient
        colors={['#0f2027', '#203a43', '#2c5364']}
        style={styles.headerContainer}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Offers</Text>
        <TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(true)}>
          <Ionicons name="menu" size={26} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* DATA PLANS */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="wifi" size={20} color={PRIMARY_COLOR} /> DATA PLANS
          </Text>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="time-outline" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>Daily Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="calendar-outline" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>Weekly Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="calendar" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>Monthly Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="calendar-sharp" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>Yearly Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="options-outline" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>Custom Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>
        </View>

        {/* AIRTIME PLANS */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="call" size={20} color={PRIMARY_COLOR} /> AIRTIME PLANS
          </Text>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="airplane-outline" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>Roaming Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="call" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>Avoor Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="earth-outline" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>International Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="card-outline" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>Recharge Cards</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="cash-outline" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>VTU</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>
        </View>

        {/* TV SUBSCRIPTIONS */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="tv-outline" size={20} color={PRIMARY_COLOR} /> TV SUBSCRIPTIONS
          </Text>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="tv" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>Stoffmes</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="tv" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>StartTimes</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="tv" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>GoTV</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="tv" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>ROKU</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="tv" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>DSTV</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="tv" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>Others</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>
        </View>

        {/* EXAM PINS */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="school-outline" size={20} color={PRIMARY_COLOR} /> EXAM PINS
          </Text>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="document-text-outline" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>WAEC</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="document-text-outline" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>NECO</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="document-text-outline" size={20} color={PRIMARY_COLOR} />
              <Text style={styles.optionText}>NABTEB</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_COLOR} />
          </TouchableOpacity>
        </View>

        {/* Additional sections can be added here */}
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

export default MerchantOffersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  /********** HEADER **********/
  headerContainer: {
    backgroundColor: PRIMARY_COLOR,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
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
  /********** SCROLL CONTENT **********/
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sectionCard: {
    backgroundColor: CARD_BACKGROUND,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
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
    marginBottom: 10,
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
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 14,
    color: DARK_TEXT,
    marginLeft: 10,
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
