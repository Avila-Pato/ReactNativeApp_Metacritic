/* eslint-disable prettier/prettier */
// GameCard.js
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Animated } from 'react-native-web';

export function GameCard({ game }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.card}>
        <Image
          source={{ uri: game.image }}
          style={styles.image}
        />
        <Text style={styles.gameTitle}>{game.title}</Text>
        <Text style={styles.description}>{game.description}</Text>
        <Text style={styles.score}>{game.score}</Text>
      </View>
    </View>
  );
}
// Animando cards

export function AnimatedCard({game, index}) {
    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 500,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);
    return (
        <Animated.View style={{ opacity }}>
            <GameCard game={game} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
  
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 207,
    height: 187,
    // resizeMode: "contain",
  },
  gameTitle: {
    color: "#fff",
    marginTop: 5,
    fontStyle: "italic",
  },
  description: {
    fontSize: 13,
    color: "white",
    marginTop: 30
  },
  score: {
    fontSize: 14,
    color: "#fff",
    marginTop: 10,
  },
});
