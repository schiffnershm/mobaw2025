import { useLocalSearchParams, Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFrogs } from '../../../context/FrogContext';

export default function FrogDetail() {
  const { id } = useLocalSearchParams();
  const { getFrogById } = useFrogs();
  const frog = getFrogById(id as string);

  if (!frog) return <Text style={styles.error}>Frog not found 🐸❌</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{frog.name} says</Text>
      <Text style={styles.wisdom}>{frog.wisdom}</Text>

      <Link href={`/frog/${id}/why`} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>But why?</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  wisdom: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 40,
    color: '#334155',
  },
  button: {
    backgroundColor: '#4ade80',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  error: {
    padding: 40,
    fontSize: 20,
    textAlign: 'center',
  },
});
