<template>
  <div>
    <v-container>
      <MyHeader></MyHeader>
      <MySidebar></MySidebar>
      <!-- <List></List> -->
    </v-container>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import MySidebar from '../components/MySidebar'
import List from '../components/List'

export default {
  name: 'HomePage',
  components: {
    MyHeader,
    MySidebar,
    List,
  },
}
</script>
