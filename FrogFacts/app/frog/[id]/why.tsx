import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useFrogs } from '../../../context/FrogContext';

export default function WhyFrog() {
  const { id } = useLocalSearchParams();
  const { getFrogById } = useFrogs();
  const frog = getFrogById(id as string);

  if (!frog) return <Text style={styles.error}>Frog not found 🐸❌</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Why does {frog?.name} say such things? 🐸</Text>
      <Text style={styles.subText}>{frog?.reason}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecfccb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#475569',
  },
  error: {
    padding: 40,
    fontSize: 20,
    textAlign: 'center',
  }
});
