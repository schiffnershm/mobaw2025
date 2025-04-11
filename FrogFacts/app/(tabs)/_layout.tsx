import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function TabsLayout() {
  return (
    <Tabs>
        <Tabs.Screen
         name="index"
            options={{
                title: 'Wisdom',
                tabBarIcon: ({ color } : any) => <MaterialIcons size={28} name="lightbulb-outline" color={color} />,
            }}
        />
        <Tabs.Screen
            name="facts"
            options={{
                title: 'Frog Facts',
                tabBarIcon: ({ color } : any) => 
                  <MaterialIcons size={28} name="article" color={color} />
            }}
      />
    </Tabs>
  );
}
