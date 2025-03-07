// src/screens/MerchantHomeScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import MerchantBottomNavigation from '../components/MerchantBottomNavigation';
import MerchantMenuModal from '../components/MerchantMenuModal';

const { width } = Dimensions.get('window');

const PRIMARY_COLOR = '#2c5364'; // Merchant primary color
const PROGRESS_COLOR = '#00C853';  // Progress arc color
const CARD_BACKGROUND = '#F9F9F9';   // Off-white for cards
const TRANSACTION_BG = '#ECECEC';    // Light grey for transaction cards
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
        fill={DARK_TEXT}
        fontSize="14"
        fontWeight="bold"
        textAnchor="middle"
      >
        {Math.round(progress * 100)}%
      </SvgText>
    </Svg>
  );
};

const MerchantHomeScreen = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  // For demonstration, assume 75% health/progress.
  const dataProgress = 0.75;
  const circleSize = 80;
  const strokeWidth = 6;

  // Dummy recent transactions data
  const recentTransactions = [
    'Order #123 delivered',
    'Order #124 pending',
    'Refund processed for Order #122',
    'New order received (#125)',
  ];

  // Quick services with icons
  const quickServices = [
    { label: 'Orders', icon: <Ionicons name="list" size={24} color={LIGHT_TEXT} /> },
    { label: 'Products', icon: <MaterialCommunityIcons name="basket-outline" size={24} color={LIGHT_TEXT} /> },
    { label: 'Top-Up', icon: <Ionicons name="wallet" size={24} color={LIGHT_TEXT} /> },
    { label: 'Disputes', icon: <Ionicons name="alert-circle" size={24} color={LIGHT_TEXT} /> },
  ];

  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient
        colors={['#0f2027', '#203a43', '#2c5364']}
        style={styles.headerContainer}
      >
        <View style={styles.headerContent}>
          <View style={styles.userInfo}>
            <Text style={styles.welcomeText}>Welcome, Merchant!</Text>
            <Text style={styles.infoText}>Manage your store efficiently</Text>
          </View>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setMenuVisible(true)}
          >
            <Ionicons name="menu" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Data Circle (Store Health) */}
        <View style={styles.dataCircleContainer}>
          <DataCircle progress={dataProgress} size={circleSize} strokeWidth={strokeWidth} />
          <Text style={styles.dataLeftLabel}>Store Health</Text>
        </View>

        {/* Merchant Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Merchant Info</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Bank:</Text>
            <Text style={styles.infoValue}>MERCHANT BANK</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Account No:</Text>
            <Text style={styles.infoValue}>1234567890</Text>
          </View>
        </View>

        {/* Recent Transactions Card */}
        <View style={styles.recentTransactionsCard}>
          <Text style={styles.sectionHeader}>Recent Transactions</Text>
          {recentTransactions.map((item, index) => (
            <View key={index} style={styles.transactionCard}>
              <Text style={styles.transactionText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Quick Services Grid */}
        <View style={styles.quickServicesCard}>
          <Text style={styles.cardTitle}>Quick Services</Text>
          <View style={styles.quickServicesGrid}>
            {quickServices.map((service, index) => (
              <TouchableOpacity key={index} style={styles.serviceItem}>
                {service.icon}
                <Text style={styles.serviceText}>{service.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Note Banner */}
        <View style={styles.noteCard}>
          <Text style={styles.noteText}>
            Note: Merchant product and service prices vary from regular users.
          </Text>
        </View>

        {/* Additional Merchant Dashboard Content */}
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

export default MerchantHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
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
  userInfo: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  infoText: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  menuButton: {
    padding: 5,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  dataCircleContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  dataLeftLabel: {
    marginTop: 5,
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
  },
  infoCard: {
    backgroundColor: 'rgba(44,83,100,0.2)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: DARK_TEXT,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: DARK_TEXT,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 14,
    color: DARK_TEXT,
  },
  recentTransactionsCard: {
    backgroundColor: TRANSACTION_BG,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: DARK_TEXT,
    marginBottom: 10,
  },
  transactionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  transactionText: {
    fontSize: 13,
    color: DARK_TEXT,
  },
  quickServicesCard: {
    backgroundColor: CARD_BACKGROUND,
    borderRadius: 12,
    padding: 15,
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
    backgroundColor: PRIMARY_COLOR,
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
    marginTop: 4,
  },
  noteCard: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
  },
  noteText: {
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
  },
  bottomNavigationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
