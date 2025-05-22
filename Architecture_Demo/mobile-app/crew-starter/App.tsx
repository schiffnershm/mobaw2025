import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [command, setCommand] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [host, setHost] = useState<string>('localhost:8080');

  const sendCommand = async () => {
      try {
        const response = await fetch(`http://${host}/run`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
      });
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error(error);
        setMessage('Failed to execute command.');
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Architecture Demo App</Text>
      <Text style={styles.paragraph}>
        This is a simple demo app to illustrate communication between frontend 
        and backend.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a host and port"
        value={host}
        onChangeText={setHost}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a command"
        value={command}
        onChangeText={setCommand}
        autoCapitalize='none'
      />
      <Button title="Send" onPress={sendCommand} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    marginTop: 20,
    fontSize: 18,
  },
  paragraph: {
    marginTop: 20,
    fontSize: 22,
    textAlign: 'center',
  },
  message: {
    marginTop: 20,
    fontSize: 22,
    color: 'green',
    textAlign: 'center',
  },
});
