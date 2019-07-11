import axios from 'axios'

// 실제
// const BASE_URL = 'https://www.dongsik.tk'
// 예상
const BASE_URL = "http://127.0.0.1:8000"

export default {
  getData(token){
    var getDataPath = '/api/v1/movies'
    return axios.get(`${BASE_URL}${getDataPath}`, {'headers':{'Authorization':`JWT ${token}`}})
  },
}
