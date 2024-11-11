import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import PerspectiveMenu from './components/PerspectiveMenu';
import Entypo from '@expo/vector-icons/Entypo';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#1e1e23' }}>
        <View style={styles.container}>
          <PerspectiveMenu style={StyleSheet.absoluteFill} />

          <View style={styles.iconContainer}>
            <Entypo name="home" size={32} color="lightblue" style={styles.iconStyle} />
            <Entypo name="user" size={32} color="lightblue" style={styles.iconStyle} />
            <Entypo name="cog" size={32} color="lightblue" style={styles.iconStyle} />
            <Entypo name="log-out" size={32} color="lightblue" style={styles.iconStyle} />
          </View>
        </View>
        <StatusBar style="inverted" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    flex: 1,
    zIndex: -1,
    flexDirection: 'column',
    backgroundColor: '#1e1e23',
    marginTop: 60,
    marginLeft: 20,
  },
  iconStyle: {
    margin: 10,
    marginBottom: 20,
  },
});
