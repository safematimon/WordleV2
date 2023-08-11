import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN

const DICTIONARY_API = process.env.DICTIONARY_API

export const getSolution = async () => {
  try {
    const response  = await axios.get(`/api/solutions`)
    return response.data
  } catch (error) {
    return {error:"error getSolution"}
  }
}



export const checkWord = async (word) => {
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return response;
  } catch (error) {
    return { error: 'error checkWord' };
  }
}
 