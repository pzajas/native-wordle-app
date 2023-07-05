import { Tabs } from 'expo-router'

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="App"
        options={{
          title: 'Wordle',
          headerTitleAlign: 'center',
        }}
      />

      <Tabs.Screen
        name="Game"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="UserInput"
        options={{
          title: 'UserInput',
          href: null,
        }}
      />
    </Tabs>
  )
}
