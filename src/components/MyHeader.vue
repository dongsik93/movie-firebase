<template>
<v-container>
  <nav class="v-toolbar v-toolbar--clipped v-toolbar--fixed elevation-6" style="margin-top:0px;padding-right:0px;padding-left:0px;transform:translateY(0px);">
      <div class="v-toolbar__content" flat style="height:58px">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title style="font-family: 'Sunflower', sans-serif;">일일 박스오피스 순위</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
              <v-btn flat @click="logout">logout</v-btn>
          </v-toolbar-items>
      </div>
  </nav>
</v-container>
</template>

<script>
window.addEventListener('DOMContentLoaded', function()
{
    created()
})

import LogoutService from '@/service/LogoutService'
import { EventBus } from "../utils/event-bus"

export default {
	name: 'MyHeader',
  data: () => ({
    drawer : null,
    movies: [{

    }],
    token : ''
  }),

  methods: {
    logout () {
        const res =  LogoutService.PageLogout()
        res.then((res) => {
            if (res.status === 200) {
                  console.log('여기통과')
                  this.$router.push({name:'Login'})
           }
          })
          .catch((e) => {
            console.log(e)
          })
        },
        created(){
            EventBus.$once("use-eventbus", token =>{
            this.token =  token
            const data = GetData.getData(this.token)
            console.log(data)
            data.then( (r) => {
              const mas = r.data
              console.log(mas)
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
          })
        })
      },
  }
}

</script>
