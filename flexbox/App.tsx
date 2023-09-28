import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TestComponent1 from './src/components/TestComponent1';

export default function App() {
  return (
    <View style={styles.container}>

      <TestComponent1/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  }
});
