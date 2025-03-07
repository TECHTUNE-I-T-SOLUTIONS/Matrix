import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from '../components/BottomNavigation';
import { useNavigation } from '@react-navigation/native';
import MenuModal from '../components/MenuModal';

const { width } = Dimensions.get('window');

const PRIMARY_PURPLE = '#2E0063';
const PROGRESS_COLOR = '#00C853'; // Color for the progress arc
const CARD_BACKGROUND = '#F9F9F9'; // Off-white background for cards
const LIGHT_TEXT = '#FFFFFF';
const DARK_TEXT = '#333333';

// DataCircle component renders a circular progress indicator.
const DataCircle = ({
  progress,
  size,
  strokeWidth,
}: {
  progress: number;
  size: number;
  strokeWidth: number;
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <Svg width={size} height={size}>
      {/* Background Circle */}
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e0e0e0"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Progress Arc */}
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={PROGRESS_COLOR}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        fill="none"
        strokeLinecap="round"
        rotation="-90"
        originX={size / 2}
        originY={size / 2}
      />
      {/* Center Percentage Label */}
      <SvgText
        x={size / 2}
        y={size / 2 + 4}
        fill={LIGHT_TEXT}
        fontSize="14"
        fontWeight="bold"
        textAnchor="middle"
      >
        {Math.round(progress * 100)}%
      </SvgText>
    </Svg>
  );
};

const RegularHomeScreen = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  // For demonstration, assume 75% of the data remains.
  const dataProgress = 0.75;
  // Reduced circular progress dimensions
  const circleSize = 80;
  const strokeWidth = 6;

  return (
    <View style={styles.container}>
      {/* Top “Header” Section */}
      <View style={styles.topSection}>
        <View style={styles.headerContent}>
          {/* Left: User Info */}
          <View style={styles.userInfo}>
            <Text style={styles.welcomeText}>Welcome, Merna!</Text>
            <Text style={styles.phoneText}>+2347084107575</Text>
          </View>
          {/* Center: Balance */}
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>₦2,500.00</Text>
          </View>
          {/* Right: Menu Icon */}
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setMenuVisible(true)}
          >
            <Ionicons name="menu" size={24} color={LIGHT_TEXT} />
          </TouchableOpacity>
        </View>

        {/* Data Left Circular Progress Indicator */}
        <View style={styles.dataCircleContainer}>
          <DataCircle progress={dataProgress} size={circleSize} strokeWidth={strokeWidth} />
          <Text style={styles.dataLeftLabel}>Data Left</Text>
        </View>

        {/* Bank Account “Card” */}
        <View style={styles.bankAccountCard}>
          <Text style={styles.cardTitle}>BANK ACCOUNT</Text>
          <View style={styles.bankRow}>
            <TouchableOpacity style={styles.bankItem}>
              <Text style={styles.bankName}>MONIEPOINT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bankItem}>
              <Text style={styles.bankName}>OPAY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bankItem}>
              <Text style={styles.bankName}>PALMPAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Main Content Scrollable Area */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Recent Transactions “Card” */}
        <View style={styles.recentTransactionsCard}>
          <Text style={styles.sectionHeader}>Recent Transactions</Text>
          <View style={styles.transactionList}>
            <Text style={styles.transactionText}>
              Successfully sent 2gb Data to +2347084107575
            </Text>
            <Text style={styles.transactionText}>
              Successfully sent 10gb Data to +2348014657100
            </Text>
            <Text style={styles.transactionText}>
              Successfully sent 5gb Data to +2349014657100
            </Text>
            <Text style={styles.transactionText}>
              Successfully sent 5gb Data to +2347058465110
            </Text>
          </View>
        </View>

        {/* Quick Services Grid */}
        <View style={styles.quickServicesCard}>
          <Text style={styles.cardTitle}>Quick Services</Text>
          <View style={styles.quickServicesGrid}>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Airtime</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>TV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Exam Pins</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Online Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Electricity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Withdrawal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>Transfers</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Exclusive Bonus Banner */}
        <View style={styles.bonusBanner}>
          <Text style={styles.bonusText}>
            EXCLUSIVE BONUS! On every 20gb Data you buy and every new user you refer.
          </Text>
        </View>

        {/* Bottom padding to ensure content is above BottomNavigation */}
        <View style={{ height: 100 }} />
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

export default RegularHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1', // Overall light background
  },
  /********** TOP SECTION **********/
  topSection: {
    backgroundColor: PRIMARY_PURPLE,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    color: LIGHT_TEXT,
  },
  phoneText: {
    fontSize: 12,
    color: LIGHT_TEXT,
    opacity: 0.8,
  },
  balanceContainer: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  balanceText: {
    color: LIGHT_TEXT,
    fontSize: 12,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 5,
  },
  dataCircleContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  dataLeftLabel: {
    marginTop: 5,
    fontSize: 16,
    color: LIGHT_TEXT,
    fontWeight: '600',
  },
  bankAccountCard: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    padding: 10,
    marginTop: 15,
  },
  cardTitle: {
    fontSize: 14,
    color: LIGHT_TEXT,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  bankRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bankItem: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  bankName: {
    color: LIGHT_TEXT,
    fontSize: 12,
    fontWeight: '500',
  },
  /********** SCROLL CONTENT **********/
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  recentTransactionsCard: {
    backgroundColor: CARD_BACKGROUND,
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: DARK_TEXT,
    marginBottom: 10,
  },
  transactionList: {
    marginTop: 10,
  },
  transactionText: {
    fontSize: 13,
    color: DARK_TEXT,
    marginBottom: 6,
  },
  quickServicesCard: {
    backgroundColor: CARD_BACKGROUND,
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },
  quickServicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  serviceItem: {
    width: width * 0.26,
    height: 80,
    backgroundColor: PRIMARY_PURPLE,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceText: {
    color: LIGHT_TEXT,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  bonusBanner: {
    backgroundColor: PRIMARY_PURPLE,
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },
  bonusText: {
    color: LIGHT_TEXT,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
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
