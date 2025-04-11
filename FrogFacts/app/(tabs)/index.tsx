import { Link } from 'expo-router';
import { Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { useFrogs } from '../../context/FrogContext';

export default function Home() {

  const { frogs } = useFrogs();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headline}>
        Croak of Destiny
      </Text>
      <Text style={styles.subheadline}>
       Choose Your Amphibian Oracle Wisely
      </Text>
      {frogs.map(frog => (
        <Link key={frog.id} href={`/frog/${frog.id}`} asChild>
          <TouchableOpacity style={styles.touchable}>
            <Image
              source={frog.image}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.frogname}>
              {frog.name}
            </Text>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0fdf4',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 12,
        marginBottom: 10,
    },
    headline: {
        fontSize: 24,
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center',
        color: '#0743db',
    },
    subheadline: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: '#0743db',
    },
    frogname: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        color: '#0743db'
    },
    touchable : {
        marginBottom: 20,
    }
});