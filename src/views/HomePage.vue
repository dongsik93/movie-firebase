<template>
  <v-container>
    <MyHeader></MyHeader>
  </v-container>
</template>

<script>
import MyHeader from '../components/MyHeader'
import store from '../store'

export default {
  name: 'DayPage',
  store,
  components: {
    MyHeader,
  },
}
</script>
