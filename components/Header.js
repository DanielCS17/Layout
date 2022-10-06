import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../pictures/IMG_0857.jpg')} style={styles.image}/>
        <Text style={styles.name}>Daniel Casado Sosa</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row'
  },

  image: {
    width: '25%',
    height: '55%',
    marginTop: 60,
    borderRadius: 100,
    marginLeft: 30
  },

  name: {
    fontFamily: 'Palatino',
    fontSize: 26,
    marginTop: 100,
    marginLeft: 30
  },
});

export default Header