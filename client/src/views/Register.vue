<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email"/>
    <br />
    <input type="password" name="password" placeholder="password" v-model="password"/>
    <br />
    <button @click="handleRegister">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleRegister () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped></style>
