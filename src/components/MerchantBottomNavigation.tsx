// src/components/MerchantBottomNavigation.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const merchantNavItems = [
  { route: 'MerchantHome', label: 'Dashboard', icon: 'speedometer' },
  { route: 'MerchantOffers', label: 'Offers', icon: 'list' },
  { route: 'MerchantTopup', label: 'Top-Up', icon: 'wallet' },
  { route: 'MerchantDispute', label: 'Disputes', icon: 'alert-circle' },
  { route: 'MerchantProfile', label: 'Profile', icon: 'person' },
];

const MerchantBottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const currentRouteName = route.name;

  return (
    <View style={styles.container}>
      {merchantNavItems.map((item) => {
        const isActive = currentRouteName === item.route;
        return (
          <TouchableOpacity
            key={item.route}
            style={styles.navItem}
            onPress={() => navigation.navigate(item.route)}
          >
            <View style={[styles.iconContainer, isActive && styles.activeIconContainer]}>
              <Ionicons
                name={item.icon}
                size={isActive ? 28 : 24}
                color={isActive ? '#fff' : '#fff'}
              />
            </View>
            <Text style={[styles.navText, isActive && styles.activeNavText]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MerchantBottomNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2c5364', // Merchant theme background color
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    padding: 8,
  },
  activeIconContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  navText: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
  },
  activeNavText: {
    fontWeight: 'bold',
  },
});
