<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import store from './store'



export default {
  name: 'App',
  store,
  data() {
      return {
        // 배포용
        // serverUrl: "https://www.dongsik.tk",
        // test용
        serverUrl: "http://127.0.0.1:8000",
      }
   }
}
</script>
