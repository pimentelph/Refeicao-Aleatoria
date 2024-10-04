import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Botao from '../Botao/Botao';

const Main = () => {
  const [receita, setReceita] = useState(null);

  const onPressBotao = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(res => {
        const receitaObjeto = criarReceita(res.meals[0]);
        setReceita(receitaObjeto);
      });
  };

  const criarReceita = dadosReceita => {
    return {
      nome: dadosReceita.strMeal,
      categoria: dadosReceita.strCategory || 'Sem categoria',
      area: dadosReceita.strArea || 'Desconhecido',
      instrucoes: dadosReceita.strInstructions,
      imagem: dadosReceita.strMealThumb,
      video: dadosReceita.strYoutube ? dadosReceita.strYoutube : null,
      ingredientes: Array.from({ length: 20 }, (_, i) => {
        const ingrediente = dadosReceita[`strIngredient${i + 1}`];
        const medida = dadosReceita[`strMeasure${i + 1}`];
        return ingrediente ? `${ingrediente} - ${medida}` : null;
      }).filter(Boolean), // Remove ingredientes nulos
    };
  };

  const renderizarReceita = () => {
    if (!receita) return null;

    return (
      <View style={styles.receitaContainer}>
        <Text style={styles.nomeReceita}>{receita.nome}</Text>
        <Image source={{ uri: receita.imagem }} style={styles.imagemReceita} />
        <Text style={styles.infoReceita}>Categoria: {receita.categoria}</Text>
        <Text style={styles.infoReceita}>Região: {receita.area}</Text>
        <Text style={styles.infoReceita}>Instruções:</Text>
        <Text style={styles.instrucoesReceita}>{receita.instrucoes}</Text>
        <Text style={styles.infoReceita}>Ingredientes:</Text>
        {receita.ingredientes.map((item, index) => (
          <Text key={index} style={styles.ingredienteReceita}>
            {item}
          </Text>
        ))}
        {receita.video && (
          <Text style={styles.videoLink}>
            Assista no YouTube: {receita.video}
          </Text>
        )}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Botao
        onPress={onPressBotao}
        textoBotao={'Clique aqui'}
        styleText={styles.textoBotao}
        styleBotao={styles.pressButton}
      />
      {renderizarReceita()}
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  receitaContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  nomeReceita: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  imagemReceita: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
    marginBottom: 10,
    resizeMode: 'cover',
  },
  infoReceita: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  instrucoesReceita: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  ingredienteReceita: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
    marginBottom: 3,
  },
  pressButton: {
    alignItems: 'center',
    backgroundColor: '#76b5c5',
    padding: 5,
    marginBottom: 5,
    borderRadius: 10,
    borderColor: '#4b7580',
    borderWidth: 2,
  },
  textoBotao: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  videoLink: {
    color: 'blue',
    marginTop: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
