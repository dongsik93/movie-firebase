<template>
  <div>
    <v-app id="inspire" style="font-family: 'Poor Story', cursive;">
        <v-parallax dark src="http://t1.daumcdn.net/liveboard/h21/8c2be2ede24845dca9c4056cd5d70849.JPG" style="height:100%">
            <h3 style="margin-left:15px; font-family: 'Pacifico', cursive;">Recommand Movie</h3>
            <v-layout   justify-start >
                <v-container style="margin-left:0px;">
                        <v-flex style="margin-top:25px;">
                            <h1 class="mb-3" style="font-family: 'Poor Story', cursive; font-size:50px;">내가 추천하는</h1>
                        </v-flex>
                        <v-flex>
                            <h1 class="mb-3" style="font-family: 'Poor Story', cursive; font-size:50px;">영화 평점 사이트</h1>
                        </v-flex>
                        <v-flex>
                            <h3>Watch movie & Recommand  !</h3>
                        </v-flex>
                        <v-flex style="margin-top:25px;">
                            <v-dialog v-model="dialog" width="500">
                                <template v-slot:activator="{ on }">
                                    <v-btn color="grey lighten-2" dark v-on="on" style="color:black">
                                        Login
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-toolbar cards >
                                        <v-card-title class="title font-weight-regular">Login</v-card-title>
                                        <v-spacer></v-spacer>
                                        <v-btn icon v-model="dialog" @click="dialog = false">
                                            <v-icon>fas fa-times</v-icon>
                                        </v-btn>

                                    </v-toolbar>
                                    <v-form
                                    ref="form1"
                                    v-model="form1"
                                    class="pa-3 pt-4"
                                    lazy-validation
                                        >
                                        <v-card-text>
                                            <v-text-field
                                            v-model="loginUsername"
                                            label="User Name"
                                            color="deep-purple"
                                            required
                                            ></v-text-field>
                                        </v-card-text>

                                        <v-card-text>
                                            <v-text-field
                                            v-model="loginEmail"
                                            label="Email Address"
                                            color="deep-purple"
                                            required
                                            ></v-text-field>
                                        </v-card-text>
                                        <v-card-text>
                                            <v-text-field
                                            v-model="loginPassword"
                                            :counter="20"
                                            label="password"
                                            color="deep-purple"
                                            required
                                            type="password"
                                            @keyup.enter="login"
                                            ></v-text-field>
                                        </v-card-text>
                                    </v-form>
                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="deep-purple" class="white--text" :disabled="!form1" depressed  @click="login">
                                            submit
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <SignUp></SignUp>
                          </v-flex>
                    </v-container>
            </v-layout>
        </v-parallax>
    </v-app>
    </div>


  </div>
</template>

<script>
import SignUp from '../components/SignUp'
import LoginService from '@/service/LoginService'
import GetData from '@/service/GetData'
import { EventBus } from '../utils/event-bus'

export default {
  name: 'LoginPage',
  data: () =>({
    dialog : false,
    form1 : false,
    loginUsername :'data',
    loginPassword :'1',
    loginEmail  :'data@naver.com',
    token :'',
    movies:[
        {
        },
    ],
  }),
  components: {
    SignUp,
  },
  methods :{
    login () {
        console.log("여기 111")
        const username = this.loginUsername;
        const password = this.loginPassword;
        const email = this.loginEmail;
        if (!username || !password ||  !email) {
            return false;
        }
        const res =  LoginService.PageLogin(username, password, email)
        res.then((res) => {
            if (res.status === 200) {
                  this.token = res.data.token
                  console.log(this.token)
                }
        })
        EventBus.$emit("use-eventbus", this.token)
        this.$router.push({
          name:'Home',
        })
      },
    }
  }
</script>
