<template>
  <v-container>
    <v-dialog v-model="singupDialog">
        <template v-slot:activator="{ on }">
            <v-btn color="grey lighten-2" v-on="on">
                signup
            </v-btn>
        </template>
        <v-card class="mx-auto" style="max-width: 500px;">
            <v-toolbar cards >
                <v-card-title class="title font-weight-regular">Signup</v-card-title>
                <v-spacer></v-spacer>
                <v-btn icon v-model="singupDialog" @click="singupDialog = false">
                    <v-icon>fas fa-times</v-icon>
                </v-btn>

            </v-toolbar>

            <!-- signup -->
            <v-form
                ref="form2"
                v-model="form2"
                class="pa-3 pt-4"
                lazy-validation
            >
                <v-text-field
                v-model="signupUsername"
                box
                color="deep-purple"
                label="username"

                ></v-text-field>
                <v-text-field
                v-model="signupEmail"
                :rules="[rules.email]"
                box
                color="deep-purple"
                label="Email address"
                type="email"
                required
                ></v-text-field>

                <v-text-field
                v-model="signupPassword"
                :rules="[rules.password, rules.length(6)]"
                box
                color="deep-purple"
                counter="20"
                label="Password"
                style="min-height: 96px"
                type="password"
                required
                ></v-text-field>

            </v-form>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn
                flat
                @click="$refs.form2.reset()"
                >
                Clear
                </v-btn>
                <v-spacer></v-spacer>

                <v-dialog v-model="signupStatus">
                    <template v-slot:activator="{ on }">
                        <v-btn :disabled="!form2" class="white--text" color="deep-purple" depressed
                        @click="[signup(), signupStatus=true]" v-on="on"
                        >Submit</v-btn>
                    </template>
                    <v-card v-if="signupStatus">
                        <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                        >
                            회원가입 성공 !!! 로그인 해주세요 :)
                        </v-card-title>
                        <v-card-text style="font-size:20px;">
                            You are now our memeber
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                flat
                                @click="singupDialog = false"
                            >
                                ok
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-card v-else>
                        <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                        >
                            회원가입 다시 해주세요
                        </v-card-title>
                        <v-card-text style="font-size:20px">
                                Signup Fail
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                flat
                                @click="signupStatus = false"
                            >
                                ok
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name : 'SignUp',
  data () {
    signupStatus: false,
    singupDialog: false,
    form2:false,
    signupUsername:'',
    signupPassword:'',
    signupEmail:'',
    rules:{
        // 회원가입 검증
        email: v => {
            const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
            const result = (v || '').match(emailRegExp)
            if (result) {
                return true
            } else {
                return 'Please enter a valid email'
            }
        },
        length: (len) => {
            return (v => {
                if((v || '').length >= len){
                    return true
                } else {
                    return `Invalid character length, required ${len}`
                }
            })
        },
        password: v => {
            const passwordRegExp = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/
            const result = (v || '').match(passwordRegExp)
            if (result) {
                return true
            } else {
                return 'Password must contain an upper case letter, a numeric character, and a special character'
            }
        },
    },
  },
  mounted (){
    this.singup()
  },
  method:{
    signup(){
        const username = this.signupUsername;
        const password1 = this.signupPassword;
        const password2 = this.signupPassword;
        const email = this.signupEmail;
        const signUpPath = '/rest-auth/registration/'
        if (!username || !password1 || !password2 || !email) {
            return false;
        }
        console.log(`${this.serverUrl}${signUpPath}`)
        axios.post(`${this.serverUrl}${signUpPath}`, { "username":username,"email":email, "password1":password1, "password2":password2})
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    // 성공적으로 회원가입이 되었을 경우
                    console.log("회원가입성공")
                    console.log(res)
                }
            })
            .catch(e => {
                console.log(e)
        })
    },
  }
}
</script>
