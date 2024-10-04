import { Text, View, StyleSheet, ScrollView } from 'react-native';

import Title from './components/Title/Title';
import Main from './components/Main/Main';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Title/>
      <Main/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pressButton: {
    alignItems: 'center',
    backgroundColor: '#76b5c5',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
});
