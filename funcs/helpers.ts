import { showMessage } from 'react-native-flash-message'
import { CONST } from '../src/utils/constants'

import axios from 'axios'

export const fetchData = async (dispatch, setText) => {
  try {
    const response = await axios.get(
      'https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase'
    )

    dispatch(setText(response?.data))
  } catch (error) {
    console.error(CONST.API_ERROR, error)
  }
}

// export const fetchData = async (setResponse: any) => {
//   try {
//     const response = await axios.get(
//       'https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase'
//     )
//     setResponse(response?.data)
//   } catch (error) {
//     console.error(CONST.API_ERROR, error)
//   }
// }

export const handleWordExist = async (userWord) => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${(userWord as string[]).join('')}`
    )
    return response
  } catch (error) {
    createToast(userWord)
    return null
  }
}

export const createToast = (userWord) => {
  showMessage({
    message: userWord.length < 5 ? 'The word is too short' : 'There is no such word!',
    type: 'danger',
    animated: true,
    position: 'bottom',
    style: {
      alignItems: 'center',
    },
  })
}
