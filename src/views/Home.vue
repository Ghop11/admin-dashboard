<template>
 <body>
  <div class="banner-img">
   <br><br><br><br><br><br><br>
   <Login></Login>
  </div>
 </body>
</template>

<script>
  import Login from '../components/Login.vue'

    export default {
        name: "SideBar.vue",
        components: {
         Login,
        },
     data() {
      return {
       test: false
      }
     },

    }
</script>


<style scoped>
 body,html {
  height: 100%;
  margin: 0;
  padding: 0;
 }
 .banner-img {
  height: 100%;
  background-image: url('../assets/login_1.jpg');
  -webkit-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  /*filter: blur(5px);*/

 }


</style>