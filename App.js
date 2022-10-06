
import { StyleSheet, View } from 'react-native';
import Body from './Component/Body';
import Cabeza from './Component/Cabeza';
export default function App() {
  return (
    <View style={styles.container}>
      <Cabeza/>
      <Body/>
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
});
