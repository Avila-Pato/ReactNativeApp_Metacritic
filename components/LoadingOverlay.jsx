/* eslint-disable prettier/prettier */

// LoadingOverlay.js
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export function LoadingOverlay() {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute', // Superpone el contenedor sobre el contenido
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente (opcional)
  },
});
