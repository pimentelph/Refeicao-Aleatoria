import { Text, View, StyleSheet } from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>

        <Text style={styles.title}> Não sabe oque cozinhar? </Text>
        <Text style={styles.paragraph}> Clique no botão abaixo para pegar uma receita aleatória! </Text>

    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 2,
    fontSize: 12,
    textAlign: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
