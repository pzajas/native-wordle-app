import { Tabs } from 'expo-router'

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Wordle',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 30,
          },
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

      <Tabs.Screen
        name="UserInputs"
        options={{
          title: 'UserInputs',
          href: null,
        }}
      />
    </Tabs>
  )
}
