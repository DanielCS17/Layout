
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>1</Text>
      </View>
      <View style={styles.body}>
        <Text>2</Text>
      </View>
      <View style={styles.qrContainer}>
        <Text>3</Text>
      </View>
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

  header: {
    flex: 1,
  },

  body: {
    flex: 2.5,
  },

  qrContainer: {
    flex: 1.5,
  },

});
