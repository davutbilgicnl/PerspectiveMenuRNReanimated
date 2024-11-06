import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PerspectiveMenu from './components/PerspectiveMenu';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <PerspectiveMenu />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
