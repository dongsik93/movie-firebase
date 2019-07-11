<template>
  <div>
    <v-container>
      <MyHeader></MyHeader>
      <MySidebar></MySidebar>
    </v-container>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import MySidebar from '../components/MySidebar'

export default {
  name: 'HomePage',
  components: {
    MyHeader,
    MySidebar,
  },
}
</script>
