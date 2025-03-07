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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const MenuScreen = () => {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(SCREEN_WIDTH)).current;

  useEffect(() => {
    // Slide in from the right when the component mounts
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const closeMenu = () => {
    // Slide out to the right and then go back
    Animated.timing(slideAnim, {
      toValue: SCREEN_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      navigation.goBack();
    });
  };

  const menuItems = [
    { label: 'Home', route: 'RegularHome', icon: 'home' },
    { label: 'Offers', route: 'Offers', icon: 'pricetag' },
    { label: 'Top-Up', route: 'TopUp', icon: 'wallet' },
    { label: 'Dispute', route: 'Dispute', icon: 'alert-circle' },
    { label: 'Profile', route: 'Profile', icon: 'person' },
    { label: 'Settings', route: 'Settings', icon: 'settings' },
    // Add more links as needed
  ];

  return (
    <TouchableWithoutFeedback onPress={closeMenu}>
      <View style={styles.overlay}>
        <Animated.View
          style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}
        >
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.menuHeader}>Menu</Text>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => {
                  closeMenu();
                  navigation.navigate(item.route);
                }}
              >
                <Ionicons
                  name={item.icon}
                  size={24}
                  color="#6200ee"
                  style={styles.menuIcon}
                />
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
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent overlay
    justifyContent: 'flex-start',
    alignItems: 'flex-end', // Align menu container to the right
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  menuContainer: {
    width: '80%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // Android elevation
    elevation: 5,
  },
  container: {
    flexGrow: 1,
  },
  menuHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6200ee',
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
    color: '#333',
  },
  closeButton: {
    marginTop: 30,
    backgroundColor: '#6200ee',
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
