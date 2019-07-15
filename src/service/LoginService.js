import axios from 'axios'
import store from '../store'

const BASE_URL = store.state.Base_URL


export default {
  PageLogin(username, password, email){
    var signUpPath = '/rest-auth/login/'
    if (!username || !password ||!email) {
        return false;
    }
    return axios.post(`${BASE_URL}${signUpPath}`, { "username":username,"email":email, "password":password})
  }
}
