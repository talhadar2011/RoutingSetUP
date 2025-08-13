<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/About">About</router-link> |
    <router-link :to="{ name:'Jobs'}">Jobs</router-link>

  </nav>
  <router-view/>
</template>
<script>
export default {
  methods:{
    
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
   padding: 10px;
  border-radius: 5px;
    text-decoration-line: none;


}

nav a.router-link-exact-active {
  color: #eee;
  background: #42b983;
   text-decoration-line: underline;


}
</style>
