import { View, Modal, Text, Pressable, TouchableOpacity } from 'react-native'
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
  const theme = useSelector((state) => state.theme)
  const styles = getStyles(theme)

  const isShortModal = modalText === 'OPTIONS'

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={[styles.primaryModalCenteredView]}>
        <View
          style={[styles.modalView, { height: isShortModal ? '60%' : '100%' }]}
        >
          <TouchableOpacity
            style={[styles.primaryModalTouchableContainer, { outline: 'none' }]}
          >
            <Text style={styles.primaryModalText}>
              {modalText}:
              <Text
                style={{
                  color: modalText === 'YOU WON' ? theme.green : theme.red,
                }}
              >
                {modalText == 'YOU WON' || modalText == 'GAME OVER'
                  ? ` ${randomWord}`
                  : ''}
              </Text>
            </Text>
            {children}

            <Pressable
              style={[
                styles.primaryModalButton,
                styles.primaryModalButtonClose,
              ]}
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
              <Text style={styles.primaryModalTextStyle}>Hide Info</Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
