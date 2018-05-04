<template>
  <div id="navbar">
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :background-color="backgroundColor"
        :text-color="textColor"
        :active-text-color="activeTextColor">
        <el-menu-item index="1">BNK48 SPACE</el-menu-item>
        <el-menu-item index="2">Income-Outcome</el-menu-item>
        <el-submenu index="3" v-if="!name" style="float: right;">
          <template slot="title">Sign In {{name}} </template>
          <el-menu-item index="3-1" @click="SignIn(0)"><img src="/google.ico" width="25px" /> Google</el-menu-item>
          <el-menu-item index="3-2" @click="SignIn(1)" disabled><img src="/facebook.ico" width="25px" /> Facebook</el-menu-item>
          <el-menu-item index="3-3" @click="SignIn(2)" disabled><img src="/github.ico" width="25px" /> Github</el-menu-item>
        </el-submenu>
        <el-menu-item index="4" style="float: right;" v-else>{{name}}</el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {
  props: ['backgroundColor', 'textColor', 'activeTextColor'],
  methods: {
    SignIn (mode) {
      const auth = [
        this.$store.getters.authGoogle,
        this.$store.getters.authFacebook,
        this.$store.getters.authGithub
      ]
      var self = this
      this.$store.getters.firebase.auth().signInWithPopup(auth[mode]).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
        self.name = user.displayName
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        console.log(error)
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
      })
    }
  },
  data () {
    return {
      name: null
    }
  }
}
</script>

<style>

</style>
