import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from '../components/BottomNavigation';
// If you're using React Navigation, pass navigation as a prop
// or use the useNavigation hook.
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

// Reuse color constants for consistency
const PRIMARY_PURPLE = '#2E0063';
const CARD_BACKGROUND = '#FFFFFF';
const LIGHT_TEXT = '#FFFFFF';
const DARK_TEXT = '#333333';

const RegularOffersScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Header Section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={26} color={LIGHT_TEXT} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Offers</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* DATA PLANS */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="wifi" size={20} color={PRIMARY_PURPLE} /> DATA PLANS
          </Text>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="time-outline" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>Daily Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="calendar-outline" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>Weekly Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="calendar" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>Monthly Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons
                name="calendar-sharp"
                size={20}
                color={PRIMARY_PURPLE}
              />
              <Text style={styles.optionText}>Yearly Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="options-outline" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>Custom Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>
        </View>

        {/* AIRTIME PLANS */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="call" size={20} color={PRIMARY_PURPLE} /> AIRTIME
            PLANS
          </Text>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="airplane-outline" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>Roaming Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="call" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>Avoor Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons
                name="earth-outline"
                size={20}
                color={PRIMARY_PURPLE}
              />
              <Text style={styles.optionText}>International Plans</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons
                name="card-outline"
                size={20}
                color={PRIMARY_PURPLE}
              />
              <Text style={styles.optionText}>Recharge Cards</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="cash-outline" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>VTU</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>
        </View>

        {/* TV SUBSCRIPTIONS */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="tv-outline" size={20} color={PRIMARY_PURPLE} /> TV
            SUBSCRIPTIONS
          </Text>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="tv" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>Stoffmes</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="tv" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>StartTimes</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="tv" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>GoTV</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="tv" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>ROKU</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="tv" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>DSTV</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="tv" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>Others</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>
        </View>

        {/* EXAM PINS */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            <Ionicons name="school-outline" size={20} color={PRIMARY_PURPLE} /> EXAM
            PINS
          </Text>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons
                name="document-text-outline"
                size={20}
                color={PRIMARY_PURPLE}
              />
              <Text style={styles.optionText}>WAEC</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons
                name="document-text-outline"
                size={20}
                color={PRIMARY_PURPLE}
              />
              <Text style={styles.optionText}>NECO</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons
                name="document-text-outline"
                size={20}
                color={PRIMARY_PURPLE}
              />
              <Text style={styles.optionText}>NABTEB</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>
        </View>

        {/* ELECTRICITY METER SUBSCRIPTION */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            <Ionicons
              name="flash-outline"
              size={20}
              color={PRIMARY_PURPLE}
            />{' '}
            ELECTRICITY METER SUBSCRIPTION
          </Text>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="flash" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>IEBDC</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="flash" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>IEBDC</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionRow}>
              <Ionicons name="flash" size={20} color={PRIMARY_PURPLE} />
              <Text style={styles.optionText}>OTHERS</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color={PRIMARY_PURPLE} />
          </TouchableOpacity>
        </View>

        {/* Extra bottom spacing so content is visible above Bottom Nav */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNavigationContainer}>
        <BottomNavigation navigation={navigation} />
      </View>
    </View>
  );
};

export default RegularOffersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1', // Lighter overall background
  },
  /********** HEADER **********/
  headerContainer: {
    backgroundColor: PRIMARY_PURPLE,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
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
    paddingTop: 10,
  },

  /********** SECTION CARDS **********/
  sectionCard: {
    backgroundColor: CARD_BACKGROUND,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    // Optional: shadow or elevation for Android
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
  /********** OPTIONS **********/
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
