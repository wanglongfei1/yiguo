<template>
    <div class="backtop">
        <div class="suspend-top" v-if="isShow" @click="backtop">
            <img src="//img07.yiguoimg.com/e/web/161230/00584/172344/top.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:false
        }
    },
    methods:{
        backtop(){
            window.scrollTo(0,0)
        },
        scrollBack(){
            let top = document.body.scrollTop || document.documentElement.scrollTop
            if(top >= 300 && !this.isShow){
                this.isShow = true
            }else if(top < 300 && this.isShow){
                this.isShow = false
            }
        }
    },
    activated(){
        window.addEventListener("scroll",this.scrollBack)
    },
    deactivated(){
        window.removeEventListener("scroll",this.scrollBack)
    },
}
</script>

<style lang="scss">
    .suspend-top{
        position: fixed;
        right:10px;
        bottom: 80px;
        width:0.4rem;
        height: 0.4rem;
        background:rgba(0,0,0,0.5);
        color:#fff;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        img{
            width:100%;
        }
    }
</style>