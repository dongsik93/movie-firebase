import axios from 'axios'
import store from '../store'

const BASE_URL = store.state.Base_URL


export default {
  PageLogout(){
    var signUpPath = '/rest-auth/logout/'
    return axios.post(`${BASE_URL}${signUpPath}`)
  }
}
