import { Stack } from 'expo-router';
import { FrogProvider } from '../context/FrogContext';

export default function Layout() {
  return (
    <FrogProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </FrogProvider>
  );
}
