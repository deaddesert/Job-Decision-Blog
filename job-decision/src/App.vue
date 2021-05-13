<template>
  <div id="app">

    <div id="head">
        <web-header></web-header>
     </div>

    <router-view></router-view>  

    <div id="foot">
      <web-footer></web-footer>
     </div>   

  </div>
</template>

<script>

import WebHeader from './Pages/Tools/Header.vue';
import WebFooter from './Pages/Tools/Footer.vue';


export default {
  name: 'App',

  components:{
   'web-header': WebHeader,
    'web-footer': WebFooter,


  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  overflow-x: hidden;
  min-height: 100%;
  padding: 0;
  margin: 0;
  background-color: #282828;
}



</style>
