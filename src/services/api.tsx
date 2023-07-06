import axios from 'axios'


const apiUrl = 'MY_URL_BASE_API'

const api = axios.create({
  baseURL: apiUrl,
})

export default api
