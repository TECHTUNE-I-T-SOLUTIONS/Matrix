// src/components/Loader.tsx
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface LoaderProps {
  transparent?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ transparent = false }) => {
  return (
    <View style={[styles.container, transparent && styles.transparentContainer]}>
      <ActivityIndicator size="large" color="#6200ee" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  transparentContainer: {
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
});

export default Loader;
