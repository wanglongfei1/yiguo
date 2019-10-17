<template>
  <div id="app">
    <keep-alive include = "home">
      <router-view></router-view>
    </keep-alive>
  </div>
  
</template>

<script>
import TabBar from "@/components/TabBar"
export default {
  components:{
    TabBar
  }
}
</script>
<style lang="scss">

</style>
