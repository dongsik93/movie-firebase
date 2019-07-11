<template>
<v-container>
  <v-layout row wrap justify-space-around style="font-family: 'Poor Story', cursive; ">
      <v-flex xs12 sm6 md4 v-for="movie,i in movies" style="margin-bottom:350px;">
          <div class="panel" >
                  <div class="front card">
                      <template>
                          <!-- <v-hover> -->
                              <v-card
                              class="elevation-1"
                              width="344" style="margin-top:20px;">
                              <v-img :aspect-ratio="9/15" v-bind:src="movie.image_url"></v-img>
                                  <v-card-title>
                                      <div>
                                          <span style="font-size:30px">{{movie.movieNm}}</span>
                                          <v-icon medium v-if="i==0" color="red">mdi-home-floor-{{i+1}}</v-icon>
                                          <v-icon medium v-if="i==1" color="primary">mdi-home-floor-{{i+1}}</v-icon>
                                          <v-icon medium v-if="i==2" color="green">mdi-home-floor-{{i+1}}</v-icon>
                                          <div class="d-flex">
                                              <v-rating
                                              :value="movie.Participating"
                                              color="amber"
                                              dense
                                              half-increments
                                              readonly
                                              size="14"
                                              ></v-rating>
                                              <div class="ml-2 grey--text text--darken-2">
                                                  <span>{{ movie.Participating }}</span>
                                                  <span>({{ movie.rating }})</span>
                                              </div>
                                          </div>
                                      </div>
                                      <v-spacer></v-spacer>
                                  </v-card-title>
                              </v-card>
                          <!-- </v-hover> -->
                      </template>
                  </div>
                  <div class="back card">
                      <!-- <v-layout>
                          <v-flex xs12 sm6 offset-sm3> -->
                              <v-card width="344" style="margin-top:20px;">
                                  <v-img v-bind:src="movie.image_url" :aspect-ratio="9/16"></v-img>
                                  <v-card-title primary-title>
                                      <div>
                                      <span style="font-size:30px">{{movie.movieNm}}</span>
                                      <v-btn small outline fab color="orange" style="font-style:bold">{{i+1}}위</v-btn><br>
                                      <strong style="font-size:20px">{{movie.score_reples[0]}}</strong>
                                      <h5 style="font-size:15px">{{movie.story}}</h5>
                                      </div>
                                  </v-card-title>

                                  <v-card-actions>
                                      <v-btn flat color="orange">평점주기</v-btn>
                                      <v-btn icon @click="movie.show1 = !movie.show1">
                                          <v-icon>{{ movie.show1 ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                                      </v-btn>
                                      <v-btn flat color="orange">글남기기</v-btn>
                                      <v-btn icon @click="movie.show2 = !movie.show2">
                                          <v-icon>{{ movie.show2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                                      </v-btn>
                                      <v-dialog v-model="movie.dialog" full-width>
                                          <template v-slot:activator="{ on }">
                                              <v-btn icon class="mr-0" v-on="on">
                                                  <v-icon>fas fa-chevron-right</v-icon>
                                              </v-btn>
                                          </template>
                                          <template>
                                              <div>
                                                  <v-toolbar color="gery" dark tabs>
                                                      <template>
                                                          <v-tabs
                                                              v-model="movie.currentItem"
                                                              color="transparent"
                                                              fixed-tabs
                                                              slider-color="yellow"
                                                          >
                                                              <v-tab
                                                              v-for="item in items"
                                                              :key="item"
                                                              :href="'#tab-' + item"
                                                              >
                                                              {{ item }}
                                                              </v-tab>
                                                          </v-tabs>
                                                      </template>
                                                  </v-toolbar>
                                                  <!-- 수정한 부분 -->
                                                  <v-tabs-items v-model="movie.currentItem" style="font-family: 'Poor Story', cursive; ">
                                                      <v-tab-item
                                                      :key="items[0]"
                                                      :value="'tab-'+items[0]"
                                                      >
                                                          <v-card flat>
                                                              <v-container fluid style="padding:0px ">
                                                                  <v-layout row>
                                                                      <v-flex style="padding:0px">
                                                                          <div  style="padding:100px 100px;opacity:0.8;color:white; min-height: 100%; background-position: center; background-size: cover;"  v-bind:style="{ backgroundImage: 'url(\'' + movie.large_image[0] + '\')' }">
                                                                              <v-btn align-end icon v-model="movie.dialog" @click="movie.dialog = false">
                                                                                  <v-icon>fas fa-times</v-icon>
                                                                              </v-btn>
                                                                              <div style="background-color:#00000047; font-size:20px;">
                                                                                  <v-card-text >
                                                                                      <h1 style="font-size:50px;">{{ movie.movieNm }}</h1>
                                                                                      <v-btn color="error">평균평점 : {{movie.Participating}}</v-btn>
                                                                                      {{movie.watchGradeNm}} | {{movie.showTm}}분
                                                                                  </v-card-text>
                                                                                  <v-card-text >
                                                                                      <h3>{{ movie.score_reples[0] }}</h3>
                                                                                  </v-card-text>
                                                                                  <v-card-text >
                                                                                      <h5>{{ movie.story }}</h5>
                                                                                  </v-card-text>
                                                                                  <v-card-text>
                                                                                      <p>감독     {{movie.actors[0]}}</p>
                                                                                      <p>출연     {{movie.actors[1]}} | {{movie.actors[2]}} | {{movie.actors[3]}}</p>
                                                                                      <p>장르     {{movie.genres[0]}} | {{movie.genres[1]}} | {{movie.genres[2]}}</p>
                                                                                  </v-card-text>
                                                                              </div>
                                                                          </div>
                                                                      </v-flex>
                                                                  </v-layout>
                                                              </v-container>
                                                          </v-card>
                                                      </v-tab-item>

                                                      <v-tab-item
                                                      :key="items[1]"
                                                      :value="'tab-'+items[1]"
                                                      >
                                                          <v-card flat>
                                                              <v-container fluid style="padding:0px">
                                                                  <div style="padding:100px 100px; color:white; min-height: 100%; background-position: center; background-size: cover;" v-bind:style="{ backgroundImage: 'url(\'' + movie.large_image[1] + '\')' }">
                                                                      <v-btn align-end icon v-model="movie.dialog" @click="movie.dialog = false">
                                                                          <v-icon>fas fa-times</v-icon>
                                                                      </v-btn>
                                                                      <div style="padding:0px; background-color:#00000047; font-size:20px;">
                                                                          <v-layout row>
                                                                              <v-flex >
                                                                                  <v-card-text>
                                                                                      <h1 style="font-size:50px;">{{ movie.movieNm }}</h1>
                                                                                      <v-btn color="error">평균평점 : {{movie.Participating}}</v-btn>
                                                                                      {{movie.watchGradeNm}} | {{movie.showTm}}분
                                                                                  </v-card-text>
                                                                              </v-flex>
                                                                          </v-layout>
                                                                          <v-layout row>
                                                                              <v-flex grow pa-1>
                                                                                  <v-card-text>
                                                                                      <h2 style="font-size:25px">감독</h2>
                                                                                      <p>{{movie.actors[0]}}</p>
                                                                                      <h2 style="font-size:25px">배우</h2>
                                                                                      <v-list-tile avatar>
                                                                                          <v-list-tile-avatar>
                                                                                                  <img v-bind:src="movie.actors_img[1]">
                                                                                          </v-list-tile-avatar>
                                                                                          <v-list-tile-content>
                                                                                              <v-list-tile-title style="font-size:20px;">{{movie.actors[1]}}</v-list-tile-title>
                                                                                          </v-list-tile-content>
                                                                                      </v-list-tile>
                                                                                      <v-list-tile avatar>
                                                                                          <v-list-tile-avatar>
                                                                                                  <img v-bind:src="movie.actors_img[2]">
                                                                                          </v-list-tile-avatar>
                                                                                          <v-list-tile-content>
                                                                                              <v-list-tile-title style="font-size:20px;">{{movie.actors[2]}}</v-list-tile-title>
                                                                                          </v-list-tile-content>
                                                                                      </v-list-tile>
                                                                                      <v-list-tile avatar>
                                                                                          <v-list-tile-avatar>
                                                                                                  <img v-bind:src="movie.actors_img[3]">
                                                                                          </v-list-tile-avatar>
                                                                                          <v-list-tile-content>
                                                                                              <v-list-tile-title style="font-size:20px;">{{movie.actors[3]}}</v-list-tile-title>
                                                                                          </v-list-tile-content>
                                                                                      </v-list-tile>
                                                                                      <v-list-tile avatar>
                                                                                          <v-list-tile-avatar>
                                                                                                  <img v-bind:src="movie.actors_img[4]">
                                                                                          </v-list-tile-avatar>
                                                                                          <v-list-tile-content>
                                                                                              <v-list-tile-title style="font-size:20px;">{{movie.actors[4]}}</v-list-tile-title>
                                                                                          </v-list-tile-content>
                                                                                      </v-list-tile>



                                                                                  </v-card-text>
                                                                              </v-flex>
                                                                              <v-flex grow pa-2>
                                                                                      <p>평균별점: <v-rating
                                                                                          :value="movie.Participating"
                                                                                          color="amber"
                                                                                          dense
                                                                                          half-increments
                                                                                          readonly
                                                                                          size="14"
                                                                                          ></v-rating> {{ movie.rating }}</p>
                                                                              </v-flex>
                                                                              <v-flex shrink pa-1 style="margin-left:20px;">
                                                                                  <h3>코멘트</h3>
                                                                                  <br>
                                                                                  <div>
                                                                                      <p>{{movie.score_reple_id[0]}}</p>
                                                                                      <p>{{movie.score_reples[0]}}</p>
                                                                                      <v-btn outline round color="white"><v-icon>far fa-thumbs-up</v-icon></v-btn> {{movie.score_reple_like[0]}}
                                                                                  </div>
                                                                                  <div>
                                                                                      <p>{{movie.score_reple_id[1]}}</p>
                                                                                      <p>{{movie.score_reples[1]}}</p>
                                                                                      <v-btn outline round color="white"><v-icon>far fa-thumbs-up</v-icon></v-btn> {{movie.score_reple_like[1]}}
                                                                                  </div>
                                                                              </v-flex>
                                                                              <v-flex shrink pa-1 style="margin-left:20px;">
                                                                                  <br>
                                                                                  <br>
                                                                                  <div>
                                                                                      <p>{{movie.score_reple_id[2]}}</p>
                                                                                      <p>{{movie.score_reples[2]}}</p>
                                                                                      <v-btn outline round color="white"><v-icon>far fa-thumbs-up</v-icon></v-btn> {{movie.score_reple_like[2]}}
                                                                                  </div>
                                                                                  <div>
                                                                                      <p>{{movie.score_reple_id[3]}}</p>
                                                                                      <p>{{movie.score_reples[3]}}</p>
                                                                                      <v-btn outline round color="white"><v-icon>far fa-thumbs-up</v-icon></v-btn> {{movie.score_reple_like[3]}}
                                                                                  </div>
                                                                              </v-flex>
                                                                              <v-flex shrink pa-1 style="margin-left:20px;">
                                                                                  <br>
                                                                                  <br>
                                                                                  <div>
                                                                                      <p>{{movie.score_reple_id[4]}}</p>
                                                                                      <p>{{movie.score_reples[4]}}</p>
                                                                                      <v-btn outline round color="white"><v-icon>far fa-thumbs-up</v-icon></v-btn> {{movie.score_reple_like[4]}}
                                                                                  </div>
                                                                              </v-flex>
                                                                          </v-layout>
                                                                      </div>
                                                                  </div>
                                                              </v-container>
                                                          </v-card>
                                                      </v-tab-item>

                                                      <v-tab-item
                                                      :key="items[2]"
                                                      :value="'tab-'+items[2]"
                                                      >
                                                          <v-card flat>
                                                              <v-container fluid style="padding:0px">
                                                                  <v-layout row wrap>
                                                                      <v-flex align-center justify-center style="padding:0px">
                                                                          <div style="padding:50px 100px; color:white; min-height: 100%; background-position: center; background-size: cover;" v-bind:style="{ backgroundImage: 'url(\'' + movie.large_image[2] + '\')' }">
                                                                              <v-btn align-end icon v-model="movie.dialog" @click="movie.dialog = false">
                                                                                  <v-icon>fas fa-times</v-icon>
                                                                              </v-btn>
                                                                              <div style="padding:0px; background-color:#00000047; font-size:20px;">
                                                                                  <v-layout row>
                                                                                      <v-flex >
                                                                                          <v-card-text style="margin-left:85px" >
                                                                                              <h1 style="font-size:50px;">미리보기</h1>
                                                                                              <embed v-bind:src="movie.video" width="1000px" height="500px" autostart="false" loop="1">
                                                                                          </v-card-text>
                                                                                      </v-flex>
                                                                                  </v-layout>
                                                                              </div>
                                                                          </div>
                                                                      </v-flex>
                                                                  </v-layout>
                                                              </v-container>
                                                          </v-card>
                                                      </v-tab-item>
                                                  </v-tabs-items>
                                              </div>
                                          </template>
                                      </v-dialog>
                                  </v-card-actions>
                                  <v-slide-y-transition>
                                          <v-card-text v-show="movie.show1">
                                              평점주기
                                              <!-- <v-rating :value="movie.Participating/" color="amber" dense half-increments readonly size="14"></v-rating> -->
                                              <div class="text-xs-center mt-5">
                                                  <v-rating
                                                      v-model="movie.newScore"
                                                      color="yellow darken-3"
                                                      background-color="grey darken-1"
                                                      empty-icon="$vuetify.icons.ratingFull"
                                                      half-increments
                                                      hover
                                                  ></v-rating>
                                              </div>
                                          </v-card-text>
                                  </v-slide-y-transition>
                                  <v-slide-y-transition>
                                          <v-card-text v-show="movie.show2">
                                              글남기기
                                              <v-textarea append-icon="far fa-smile-wink" value="이곳에 영화평을 남겨 주세요!!"></v-textarea>
                                              <v-btn>확인</v-btn>
                                          </v-card-text>
                                  </v-slide-y-transition>
                                  <v-slide-y-transition>

                                  </v-slide-y-transition>
                              </v-card>
                          <!-- </v-flex>
                      </v-layout> -->
                  </div>
          </div>
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
  export default {
    data: ()=>({
      items: [
          "기본정보","상세정보","미리보기",
      ],
    }),
  }


</script>
