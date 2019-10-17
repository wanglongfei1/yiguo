<template>
    <div class="banner swiper-container">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide"
                v-for="banner in banners"
                :key="banner._id"    
            >
                <img :src="banner.pictureUrl" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            banners:[]
        }
    },
    created(){
        this.$http.get("/api/banner",{}).then(res=>{
            this.banners = res.data.data.object_list.splice(1,7)
            this.$nextTick(()=>{
                new Swiper(".banner",{
                    autoplay:true,
                    loop:true,
                    pagination:{
                        el:".swiper-pagination"
                    }
                })    
            })
        })
    }
}
</script>

<style lang="scss">
    .banner{
        width: 100%;
        height: 2.15rem;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        z-index: 1;
        .swiper-slide{
            width: 375px;
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet{
            background:#f4e9dc;
            width: 6px;
            height: 6px;
            opacity: 1;
        }
        .swiper-pagination-bullet-active{
            background:#f4e9dc;
            width: 8px;
            height: 8px;
            vertical-align: -1px;
        }
    }
</style>