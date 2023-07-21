import axios from 'axios'
import { CONST } from '../src/utils/constants'

export const fetchData = async (setResponse: any) => {
  try {
    const response = await axios.get(
      'https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase'
    )
    setResponse(response?.data)
  } catch (error) {
    console.error(CONST.API_ERROR, error)
  }
}
