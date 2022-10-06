import { StyleSheet, Text, View, Image } from 'react-native';

const Body = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Hola, me llamo Daniel Casado Sosa.
            Me metí en este ciclo de Desarrollo de Aplicaciones porque me dijeron que siendo programador se ligaba mucho. Pues bien, han pasado tres años, sigo soltero y ahora se supone que tengo que sacarme un grado superior y no se cómo.
            Ayuda.
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
      width: '85%',
    },

    text: {
      fontFamily: 'Courier New',
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 80
    },

  });
  
export default Body