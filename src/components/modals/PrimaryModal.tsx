import {
  View,
  Modal,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { theme } from '../../styles/theme'
import { IPrimaryModal } from '../../typescript/types'

const PrimaryModal = ({
  modalVisible,
  setModalVisible,
  modalText,
  handleGameReset,
  setGameResult,
  children,
}: IPrimaryModal) => {
  const isShortModal = modalText === 'STATISTICS' || modalText === 'OPTIONS'

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View
          style={[styles.modalView, { height: isShortModal ? '60%' : '100%' }]}
        >
          <TouchableOpacity
            style={[styles.touchableContainer, { outline: 'none' }]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.modalText}>{modalText}</Text>
            {children}

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                if (modalText === 'INFORMATION' || modalText === 'STATISTICS') {
                  setModalVisible(!modalVisible)
                } else {
                  setModalVisible(!modalVisible)
                  setGameResult(false)
                  handleGameReset()
                }
              }}
            >
              <Text style={styles.textStyle}>Hide Info</Text>
            </Pressable>
          </TouchableOpacity>
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
    height: '100%',
    width: '100%',
    margin: 20,
    backgroundColor: theme.colors.black,
    borderColor: theme.colors.white,
    borderWidth: 1,
    padding: 50,
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
  touchableContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: theme.colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.white,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
})

export default PrimaryModal
