<template>
  <form class="col-6" @submit.prevent="auth">
    <div>{{form.email}}</div>
    <div>{{form.password}}</div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" v-model = "email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" v-model= "password" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="submit"  class="btn btn-primary">Submit</button>
  </form>
</template>

<script>

import {mapActions} from "vuex"

export default {
  name: "LoginPage",
  data() {
    return{
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(["fetchToken"]),
    auth(){
      this.fetchToken(this.form)
    }
  }
}
</script>

<style scoped>

</style>