import axios from 'axios'

// 실제
const BASE_URL = 'https://www.dongsik.tk'
// 예상
// const BASE_URL = "http://127.0.0.1:8000"

export default {
  PageSignup(username, password1, password2, email){
    var signUpPath = '/rest-auth/registration/'
    if (!username || !password1 || !password2 || !email) {
        return false;
    }
    return axios.post(`${BASE_URL}${signUpPath}`, { "username":username,"email":email, "password1":password1, "password2":password2})
  }
}
