<template>
  <div class="banner-box swiper-container">
     <div class="swiper-wrapper">
         <div class="swiper-slide">
             <img src="https://img10.yiguoimg.com/d/items/2019/190329/9288737695704701_500.jpg" alt="">
             <img src="https://img13.yiguoimg.com/d/items/2019/190329/9288737695671933_500.jpg" alt="">
             <img src="https://img10.yiguoimg.com/d/items/2019/190329/9288737695737469_500.jpg" alt="">
         </div>

     </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            banners:[]
        }
    },
    created(){
        this.$http.get("api/eat",{
            params:{
                limit:6
            }
        }).then(res=>{
            console.log(1)
        })
    }
}
</script>

<style>

</style>-