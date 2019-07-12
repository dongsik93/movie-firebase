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
import EventBus from '../utils/event-bus'

export default {
  name: 'HomePage',
  components: {
    MyHeader,
    MySidebar,
    List,
  },
  data() {
    return {
      loading : false,
    }

  },
  created () {
    console.log("created 호출")
    // console.log(LoginPage.token)
    EventBus.$on('message', this.onReceive);

    this.fetchData()

  },
  watch:{
    '$route': 'fetchData'
  },
  methods : {
    onReceive(token){
      console.log(token)
      this.token = token
      console.log(this.token)
    },
    fetchData (){
      this.token = null
      this.loading = true
      console.log(this.$route)
      // getMovies(this.$route.parms.id, (token) => {
      //   this.token = token
      //   this.loading = false

    },
    dataSet (){
      const data = GetData.getData(this.token)
      console.log(data)
      data.then( (r) => {
        const mas = r.data
        this.movies = mas.map(function(m){
            // 데이터 못 가져오는 것들 처리
            const part = m.Participating * 1
            const reple = eval(m.score_reples)
            const genre = eval(m.genres)
            const act_img = eval(m.actors_img)
            const actor = eval(m.actors)
            const actor_img = eval(m.actors_img)
            const act_role = eval(m.actors_role)
            const large_img = eval(m.large_image)
            const score_reple_id = eval(m.score_reple_id)
            const score_reple_like = eval(m.score_reple_like)
            const currentItem = 'tab-기본정보'
            return {...m, newScore:0,dialog:false,
                        Participating:part,score_reples:reple,genres:genre,
                        actors_img:act_img, actors_role:act_role,actors:actor,
                        large_image:large_img,score_reple_id:score_reple_id, score_reple_like:score_reple_like,
                        actors_img:actor_img, currentItem:currentItem,
                        show1:false,show2:false}
        })
        console.log("movies 가공 완료")
      })
    }
  }
}

</script>
