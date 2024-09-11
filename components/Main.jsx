/* eslint-disable prettier/prettier */
// Main.js
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getLatestGames } from '../lib/metacritic';
import { AnimatedCard, GameCard } from './GameCard';
import { LoadingOverlay } from './LoadingOverlay'; // Asegúrate de que este componente esté correctamente definido
import { Logo } from './Logo';

export function Main() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    async function fetchGames() {
      try {
        const data = await getLatestGames();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGames();
  }, []);

  return (
    <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}>
 <View style={{ marginBottom: 20 }}>
        <Logo />
      </View>

      {loading && <LoadingOverlay />}
      <FlatList
    //   FlatList renderiza que solo lo que encecita po ende es mas  optimo
        data={games}
        keyExtractor={(item) => item.slug} // Usar `item.slug` como clave
        renderItem={({ item, index }) => <AnimatedCard game={item}  index={index}/>} // Renderiza cada `GameCard`
      />
    </View>
  );
}
