<template>
  <div class="good">
      <div class="good-all">
          <div class="heade" id="app">
              <i @click="test">X</i>
              <span><img src="http://img13.yiguoimg.com/d/albums/2019/190829/153403927062423325_640.jpg" alt=""></span>
              <dl>
                  <dt>易果生鲜</dt>
                  <dd>新人立享80元优惠券</dd>
              </dl>
              <a href="">立即打开</a>
          </div>
          <Banner></Banner>
      </div>
      
      <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from './Bottom'
import Banner from './Banner'
export default {
     components:{
        Bottom,Banner
    },
    methods:{
        test:function(){
            var app = document.getElementById("app")
            app.style.display = "none"
        }
    }
}
</script>

<style lang="scss">
    .good{
        .good-all{
            .heade{
                
                display:flex;
                
                align-items:center;
                i{
                    display: inline-block;
                    width:0.45rem;
                    height:0.45rem;
                    text-align: center;
                    line-height:0.45rem;
                    color:#ccc;
                    font-size:25px;
                }
               
                span{
                    width:0.4rem;
                    height:0.4rem;
                    border:1px solid #ccc;
                    border-radius:15%;
                    text-align:center;
                    line-height: 0.4rem;
                    img{
                        width:0.38rem; 
                        border-radius:15%;

                    }
                }
                dl{
                    width:1.9rem;
                    margin-left:0.1rem;
                }
                a{
                    background: #11B57C;
                    width:0.78rem;
                    padding:0.07rem 0;
                    border-radius: 3px;
                    font-size:14px;
                    color:#fff;
                    text-align: center;
                }


            }
        }
    }
</style>