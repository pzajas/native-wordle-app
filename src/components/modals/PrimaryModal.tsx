import { View, Modal, Text, Pressable, TouchableOpacity } from 'react-native'
import { IPrimaryModal, IRootState } from '@typescript/types'
import { useDispatch, useSelector } from 'react-redux'
import { getStyles } from '@styles/styles'
import { setGameResult, setIsModalvisible } from '@redux/features/booleanSlice'

export const PrimaryModal = ({ handleGameReset, children }: IPrimaryModal) => {
  const theme = useSelector((state: IRootState) => state.theme)
  const dispatch = useDispatch()
  const { isModalVisible } = useSelector((state: IRootState) => state.boolean)
  const { modalText, randomWord } = useSelector((state: IRootState) => state.strings)

  const styles = getStyles(theme)

  const isShortModal = modalText === 'LANGUAGES' || modalText === 'OPTIONS'

  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <View style={[styles.primaryModalCenteredView]}>
        <View style={[styles.modalView, { height: isShortModal ? '80%' : '100%', width: 375 }]}>
          <TouchableOpacity style={[styles.primaryModalTouchableContainer, { outline: 'none' }]}>
            <Text style={styles.primaryModalText}>
              {modalText}:
              <Text
                style={{
                  color: modalText === 'YOU WON' ? theme.green : theme.red,
                }}
              >
                {modalText == 'YOU WON' || modalText == 'GAME OVER' ? ` ${randomWord}` : ''}
              </Text>
            </Text>
            {children}

            <Pressable
              style={[styles.primaryModalButton, styles.primaryModalButtonClose]}
              onPress={() => {
                if (
                  modalText === 'INFORMATION' ||
                  modalText === 'STATISTICS' ||
                  modalText === 'OPTIONS' ||
                  modalText === 'LANGUAGES'
                ) {
                  dispatch(setIsModalvisible(!isModalVisible))
                } else {
                  dispatch(setIsModalvisible(!isModalVisible))

                  dispatch(setGameResult(false))
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
