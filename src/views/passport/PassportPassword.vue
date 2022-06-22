<template>
  <b-card>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <b-row >

      <b-col sm="3">
        <label>Login</label>
      </b-col>
      <b-col sm="9">
        <b-form-input v-model="user.login"></b-form-input>
      </b-col>
    </b-row>
    <b-row >
      <b-col sm="3">
        <label>Password</label>
      </b-col>
      <b-col sm="9">
        <b-form-input v-model="user.password"></b-form-input>
      </b-col>
    </b-row>
    <b-button @click="login">Login / Connexion</b-button>
    <b-button @click="register">Register / Inscription</b-button>
    <b-button @click="logout">Logout / Deconnexion</b-button>
    <br>
    user socket not connected : {{ user  }}<br>
    username: {{ username }}
  </b-card>
</template>

<script>
//https://github.com/socketio/socket.io/tree/master/examples/passport-example
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'PassportPassword',
  data(){
    return{
      user_form: {}
    }
  },
  methods:{
    login(){
      console.log(this.user_form)
    },
    register(){
      console.log(this.user_form)
    }
  },
  computed:{
    user(){
      return this.$store.state.vatch.user
    },
    username(){
      return this.$store.state.vatch.username
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>
