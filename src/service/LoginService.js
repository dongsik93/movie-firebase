import axios from 'axios'

// 실제
// const BASE_URL = 'https://www.dongsik.tk'
// 예상
const BASE_URL = "http://127.0.0.1:8000"

export default {
  PageLogin(username, password, email){
    var signUpPath = '/rest-auth/login/'
    if (!username || !password ||!email) {
        return false;
    }
    return axios.post(`${BASE_URL}${signUpPath}`, { "username":username,"email":email, "password":password})
  }
}
