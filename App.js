import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const icon = require('./assets/icon.png')
export default function App() {
  return (
    <View style={styles.container}>
         <StatusBar style="light" />
       <Image source={{ uri: "https://www.metacritic.com/a/img/catalog/provider/7/2/7-1725950952.jpg"}} 
       style={{width: 315, height: 270, resizeMode: 'contain'}} 
       />
       <Text style={{color: 'white'}}>Aqui tenemos la app</Text>
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
});
