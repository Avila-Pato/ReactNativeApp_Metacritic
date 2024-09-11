/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, } from 'react-native';
import {Main} from "./components/Main"
import { SafeAreaProvider } from 'react-native-safe-area-context';




// Renderizar providers y se use como un componente para separarlo
// en contexto un provider se refiere a un componente por ejemplo safeareaprovider que envuelve una parte de la
// app y proporciona un valor o funcionalidad a todos los componentes dentro de su arbol
export default function App() {

// SafeAreaProvider asegura que el contenido se ajuste dentro de las areas seguras de un dispositivo movil 
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar style='light' />
      <Main />
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  
  }

});
