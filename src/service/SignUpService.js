import axios from 'axios'
import store from '../store'

const BASE_URL = store.state.Base_URL


export default {
  PageSignup(username, password1, password2, email){
    var signUpPath = '/rest-auth/registration/'
    if (!username || !password1 || !password2 || !email) {
        return false;
    }
    return axios.post(`${BASE_URL}${signUpPath}`, { "username":username,"email":email, "password1":password1, "password2":password2})
  }
}
