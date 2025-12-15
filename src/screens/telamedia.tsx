import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

export default function TelaMedia() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [media, setMedia] = useState(0);

  function calcularMedia() {
    const n1 = Number(nota1);
    const n2 = Number(nota2);

    const resultado = (n1 + n2) / 2;
    setMedia(resultado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Média</Text>

      <TextInput
        style={styles.input}
        placeholder="nota 1"
        keyboardType="numeric"
        value={nota1}
        onChangeText={setNota1}
      />

      <TextInput
        style={styles.input}
        placeholder="nota 2"
        keyboardType="numeric"
        value={nota2}
        onChangeText={setNota2}
      />

      <View style={styles.botao}>
        <Button title="MÉDIA" onPress={calcularMedia} />
      </View>

      <Text style={styles.resultado}>Nota: {media}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  botao: {
    marginBottom: 25,
  },

  resultado: {
    fontSize: 28,
    textAlign: 'center',
  },
});
