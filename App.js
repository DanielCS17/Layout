
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Qr from './components/Qr.js';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.body}>
        <Body />
      </View>
      <View style={styles.qrContainer}>
        <Qr />
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
    flex: 2.2,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffeb'
  },

  qrContainer: {
    flex: 1.8,
    backgroundColor: '#ecd6c0',
    width: '100%'
  },

});

export default App