<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Navbarcomponent></Navbarcomponent>
    <router-view/>
  </div>
</template>

<script>
import Navbarcomponent from '@/components/Navbarcomponent'
export default {
  name: 'App',
  components:{
        Navbarcomponent
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:0px;
}
</style>
