import axios from 'axios'
import store from '../store'

const BASE_URL = store.state.Base_URL

export default {
  store,
  getData(token){
    var getDataPath = '/api/v1/movies/'
    return axios.get(`${BASE_URL}${getDataPath}`, {'headers':{'Authorization':`JWT ${token}`}})
  },

  getTotalData(token){
    var getDataPath = '/api/v1/ourmovies/'
    return axios.get(`${BASE_URL}${getDataPath}`, {'headers':{'Authorization':`JWT ${token}`}})
  }
}
