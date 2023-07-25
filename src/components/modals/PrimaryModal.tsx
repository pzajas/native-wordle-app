import {
  View,
  Modal,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native'
import { theme } from '../../styles/theme'

const PrimaryModal = ({
  modalVisible,
  setModalVisible,
  modalText,
  handleGameReset,
  setGameResult,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{modalText}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setModalVisible(!modalVisible)
              setGameResult(false)
              handleGameReset()
            }}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: theme.colors.grey.dark,
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
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: theme.colors.white,
  },
})

export default PrimaryModal
