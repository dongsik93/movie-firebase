import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
			path: '/',
			name: 'Login',
			component: LoginPage
		},
    {
      path: '/home',
      name : 'Home',
      component : HomePage
    },
  ]
})
