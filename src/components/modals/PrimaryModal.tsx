import {
  View,
  Modal,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native'
import { theme } from '../../styles/theme'

const PrimaryModal = ({
  modalVisible,
  setModalVisible,
  resultText,
  handleGameReset,
  setGameResult,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {resultText}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible)
                setGameResult(false)
                handleGameReset()
              }}
            >
              <Text style={styles.textStyle}>
                Hide Modal
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    fontFamily: 'custom-font',
  },
  modalView: {
    margin: 20,
    fontFamily: 'custom-font',
    backgroundColor: theme.colors.grey,
    borderColor: theme.colors.white,
    borderWidth: 1,
    padding: 35,
    alignItems: 'center',
    shadowColor: theme.colors.green,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
    marginVertical: 10,
    outlineWidth: 0,
  },
  buttonClose: {
    backgroundColor: theme.colors.yellow,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'custom-font',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'custom-font',
    color: theme.colors.white,
  },
})

export default PrimaryModal
