<template>
  <div id="app">
<<<<<<< HEAD
   
    
  
    <router-view></router-view>
=======
    <keep-alive include = "home">
      <router-view></router-view>
    </keep-alive>
>>>>>>> c15298d18828e52fedea667c9dd560805f67b763
  </div>
</template>

<script>
<<<<<<< HEAD
export default {

}
</script>

<style>
=======
import TabBar from "@/components/TabBar"
export default {
  components:{
    TabBar
  }
}
</script>
<style lang="scss">
>>>>>>> c15298d18828e52fedea667c9dd560805f67b763

</style>
