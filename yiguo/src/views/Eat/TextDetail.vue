<template>
<div>
    <div 
    class="textdetail" 
       
    >
       <div class="heade" >
           <img :src="text.img?text.img:''" alt="">
            <span>{{text.classify}}</span>
            <em>上海</em>
          
       </div> 
        <p class="title">{{text.title}}</p>
       <div class="nav">
           <div class="left">
               <img src="http://img09.yiguoimg.com/d/albums/2019/190811/153403926871222027_640.jpg" alt="">
               <span>{{text.name}}</span>
           </div>
           <div class="right">
               <span>{{text.time}}</span>
           </div>
       </div>

        <TextCount ></TextCount>
        <Bottom></Bottom>
    </div>
</div>
</template>

<script>
import Bottom from './Bottom'
import TextCount from './TextCount'

export default {
 components:{
      Bottom,TextCount
    },
    data(){

        return {
            text:[]
        }
    },
    created(){
      let textId = this.$route.params.id
      this.$http.get("api/eat",{
          params:{
              id: textId 
          }
      }).then(res=>{
          this.text = res.data.data.object_list[0]
      })
    }
}
</script>

<style lang="scss">
   .textdetail{
       .heade{
           img{
               width:100%;
           }
           em{
                width:0.6rem;
                position: absolute;
                top:0.1rem;
                right:0.2rem;
                background:rgba(255,255,255,.85);
                font-size:14px;
                border-radius:20px;
                text-align: center;
            }
           span{
               width:0.6rem;
              position: absolute;
               top:0.1rem; 
               left:0;
               line-height: 24px;
               background: #FF742E;
               color:#fff;
               border-radius:0 15px 15px 0;
               text-align: center;
           }
         
       }
        .title{
           font-size:18px;
           line-height:22px;
           color:#000;
           padding-top:14px;
           margin:0 0.1rem;
        }
       .nav{
           margin-top:0.18rem;
           margin-left:0.1rem;
           overflow: hidden;
           position: relative;
          .left{
              display: flex;
              float:left;

              img{
                  width:0.34rem;
              }
              span{
                  font-size:16px;
                  color:#000;
              }
          }
         .right{
             float:right;
             position:absolute;
             right:0;
             bottom:0;
             font-size:13px;
         }
       }
   }

</style>