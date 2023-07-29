import {
  View,
  Modal,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { IPrimaryModal } from '../../typescript/types'
import { useSelector } from 'react-redux'
import { getStyles } from '../../styles/styles'

export const PrimaryModal = ({
  modalVisible,
  setModalVisible,
  modalText,
  handleGameReset,
  setGameResult,
  children,
  randomWord,
}: IPrimaryModal) => {
  const selectedTheme = useSelector((state) => state.theme)
  const stylez = getStyles(selectedTheme)

  const isShortModal = modalText === 'OPTIONS'

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={[styles.centeredView]}>
        <View
          style={[stylez.modalView, { height: isShortModal ? '60%' : '100%' }]}
        >
          <TouchableOpacity
            style={[styles.touchableContainer, { outline: 'none' }]}
            // onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.modalText}>
              {modalText}:
              <Text style={{ color: selectedTheme.match }}>
                {modalText == 'YOU WON' || modalText == 'GAME OVER'
                  ? ` ${randomWord}`
                  : ''}
              </Text>
            </Text>
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
    backgroundColor: '#b49c3c',
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
})
