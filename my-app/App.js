import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>2° ANO - 2025</Text>
      <Text style={styles.info}>3° BIMESTRE</Text>
      <Text>NÍCOLAS DOS SANTOS RIBEIRO DA SILVA</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  info: {
    fontSize: 30,
    marginBottom: 50,
    padding: 20,
    borderWidth: 3,
    borderRadius: 20,
  },
});