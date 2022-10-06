import { StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const Qr = () => {
  return (
    <View style={styles.container}>
        <QRCode value='https://github.com/DanielCS17/Layout' />
    </View>
  )
}

const styles = StyleSheet.create({

    container: {

    },
  
    qr: {

    }
  });

export default Qr