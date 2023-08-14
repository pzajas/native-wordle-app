import { showMessage } from 'react-native-flash-message'
import { CONST } from '@utils/constants'
import axios from 'axios'

export const fetchData = async (dispatch, setText) => {
  try {
    const response = await axios.get('https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase')

    dispatch(setText(response?.data))
  } catch (error) {
    console.error(CONST.API_ERROR, error)
  }
}

export const handleWordExist = async (userWord: string[]) => {
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord.join('')}`)

    return response
  } catch (error) {
    createToast(userWord)
    return null
  }
}

export const createToast = (userWord: string) => {
  showMessage({
    message: userWord.length < 5 ? 'The word is too short' : 'There is no such word!',
    type: 'danger',
    animated: true,
    position: 'top',
    style: {
      alignItems: 'center',
    },
  })
}
