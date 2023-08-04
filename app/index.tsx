import { StyleSheet, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../src/redux/store/store'
import { theme } from '../src/styles/theme'

import 'expo-router/entry'
import App from './App'

export const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#181818',
    fontWeight: 600,
  },
  customText: {
    fontSize: 40,
    color: theme.colors.white,
  },
})
