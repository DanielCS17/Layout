
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
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
    flexDirection: 'row',
    backgroundColor: 'aliceblue',
    width: '100%'
  },

  body: {
    flex: 2.5,
    width: '100%'
  },

  qrContainer: {
    flex: 1.5,
    backgroundColor: 'lightgrey',
    width: '100%'
  },

});

export default App