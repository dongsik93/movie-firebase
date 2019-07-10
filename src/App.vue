<template>
  <v-app>
    <v-content>
      <MyHeader></MyHeader>
      <MySidebar></MySidebar>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

import MyHeader from './components/MyHeader.vue'
import MySidebar from './components/MySidebar.vue'


export default {
  name: 'App',
  components: {
    MyHeader,
    MySidebar,
  },
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
