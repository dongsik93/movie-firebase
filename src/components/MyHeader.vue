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
export default {
	name: 'MyHeader',
  data: () => ({
    drawer = null,
  }),
  mounted() {
    this.logout()
  },
  methods: {
    logout () {
        const signUpPath = '/rest-auth/logout/'
        axios.get(`${this.serverUrl}${signUpPath}`)
            .then(res => {
                if (res.status === 200) {
                    // 성공적으로 로그아웃이 될 경우
                    location.href="https://www.dongsik.tk"
                }
            })
            .catch(e => {
                console.log(e)
        })
    },
  }
}

</script>
