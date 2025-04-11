import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FrogFacts() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Types of Frogs</Text>
      <Text style={styles.fact}>Under construction ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fefce8',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  fact: {
    fontSize: 18,
    marginBottom: 15,
    color: '#334155',
    textAlign: 'center',
  },
});
