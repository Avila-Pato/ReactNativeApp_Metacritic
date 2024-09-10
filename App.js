import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getLatestGames } from './lib/metacritic';



export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const data = await getLatestGames();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }
    fetchGames();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
     <ScrollView contentContainerStyle={styles.ScrollView} >
      
      {games.map((game) => (
        <View key={game.slug} style={styles.card}>
          <Image 
            source={{ uri: game.image }} 
            style={{
              width: 107,
              height: 147,
              borderRadius: 10,
            }}
            />
          <Text style={styles.gameTitle}>{game.title}</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    alignItems: 'center',
  },
  gameTitle: {
    color: '#fff',
    marginTop: 5,
  },
});
