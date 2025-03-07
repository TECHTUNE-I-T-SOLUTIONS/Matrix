import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const navItems = [
  { route: 'RegularHome', label: 'Home', icon: 'home' },
  { route: 'Offers', label: 'Offers', icon: 'pricetag' },
  { route: 'TopUp', label: 'Top-Up', icon: 'wallet' },
  { route: 'Dispute', label: 'Dispute', icon: 'alert-circle' },
  { route: 'Profile', label: 'Profile', icon: 'person' },
];

const BottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const currentRouteName = route.name;

  return (
    <View style={styles.container}>
      {navItems.map((item) => {
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
                color={isActive ? '#6200ee' : '#fff'}
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

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2E0063', // Purple color
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
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
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
    color: '#fff',
    fontWeight: 'bold',
  },
});
