import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});