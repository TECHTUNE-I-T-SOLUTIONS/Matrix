// src/components/MerchantMenuModal.tsx
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const SCREEN_WIDTH = Dimensions.get('window').width;

const MerchantMenuModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(SCREEN_WIDTH)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: SCREEN_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start(() => onClose());
  };

  const menuItems = [
    { label: 'Dashboard', route: 'MerchantHome', icon: 'speedometer' },
    { label: 'Offers', route: 'MerchantOffers', icon: 'list' },
    { label: 'Top-Up', route: 'MerchantTopUp', icon: 'wallet' },
    { label: 'Disputes', route: 'MerchantDispute', icon: 'alert-circle' },
    { label: 'Profile', route: 'MerchantProfile', icon: 'person' },
    { label: 'Settings', route: 'MerchantSettings', icon: 'settings' },
  ];

  return (
    <Modal transparent visible={visible} animationType="none">
      <TouchableWithoutFeedback onPress={closeMenu}>
        <View style={styles.overlay}>
          <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
            <LinearGradient
              colors={['#0f2027', '#203a43', '#2c5364']}
              style={styles.gradientHeader}
            >
              <Text style={styles.menuHeader}>Merchant Menu</Text>
            </LinearGradient>
            <ScrollView contentContainerStyle={styles.container}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.menuItem}
                  onPress={() => {
                    closeMenu();
                    navigation.navigate(item.route as never);
                  }}
                >
                  <Ionicons name={item.icon} size={24} color="#2c5364" style={styles.menuIcon} />
                  <Text style={styles.menuLabel}>{item.label}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity style={styles.closeButton} onPress={closeMenu}>
                <Text style={styles.closeButtonText}>Close Menu</Text>
              </TouchableOpacity>
            </ScrollView>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default MerchantMenuModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // Semi-transparent overlay
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  menuContainer: {
    width: '50%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  gradientHeader: {
    padding: 20,
    justifyContent: 'center',
    borderRadius: 8,
  },
  menuHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuIcon: {
    marginRight: 15,
  },
  menuLabel: {
    fontSize: 18,
    color: '#2c5364',
  },
  closeButton: {
    marginTop: 30,
    backgroundColor: '#2c5364',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
