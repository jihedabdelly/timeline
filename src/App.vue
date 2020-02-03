<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Timeline />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import BarCh from './components/BarChart'
import Timeline from './components/TimeLine_demo'


export default {
  name: 'app',
  components: {
    
    //BarCh,
    Timeline
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
  margin-top: 60px;
}
</style>
