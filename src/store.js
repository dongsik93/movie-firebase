import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		accessToken: '',
		user: '',
    // Base_URL : 'https://www.dongsik.tk',
    Base_URL : "http://127.0.0.1:8000",
    movies:'',
    totalMovies:'',
  }
})
