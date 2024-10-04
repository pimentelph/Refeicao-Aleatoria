import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Botao = ({ onPress, textoBotao, styleText, styleBotao }) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styleBotao} onPress={onPress}>

        <Text style={styleText}>{textoBotao}</Text>

      </TouchableOpacity>

    </View>
  );
};

export default Botao;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
