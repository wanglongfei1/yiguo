<template>

  <div  class="div1">
        <div class="all">
            <span
              v-for="list in lists"
              :key = "list.id"
              :class="{active:price ===list.price}"
              @click ="wlf(list.price)"
            >{{list.title}}</span>
        </div>
      <!-- sdsadsa -->
     
      <div   class="out">
          <div 
            class="inforPro"
            v-for="detail in details"
            :key="detail.id"
            
          >
              <div class ="img">
                <img :src="detail.SmallPic" alt="">
              </div>
              <div class=right>
                  <p class="title">{{detail.CommodityName}}</p>
                  <p class="txt">{{detail.SubTitle}}</p>
                  <p class="price">
                  <span class="priceRed">￥{{detail.SellPrice}}</span>
                  <span class="standard">{{detail.Spec}}</span>
                  <span class="addCart" @click="addGoodInCars(detail)"></span>
                  </p>
              </div>
          
          </div>
      </div>
   <router-link to="./car" tag="div" class="opt"></router-link>
   <div class="aaa">{{computeTotal.num}}</div>

  </div>

</template>

<script>
import {mapActions,mapGetters} from "vuex"

export default {
  data(){
    return{
      price:'MaxLimitCount',
      details:[],
      lists:[
        {id:1,title:"销量",price:"MaxLimitCount"},
         {id:2,title:"新品",price:"CommodityTag"},
         {id:3,title:"价格",price:"OriginalPrice"}
      ]
    }
  }, 
    created(){
     
        //120.78.3.11:4396/api/splist
        this.$http.get("/api/splist",{
        
        }).then(res=>{
           
            this.details=res.data.data.object_list 
           
        })
        this.$http.get("/api/splist",{
           params:{
         
          }
        }).then(res=>{
           
            this.details=res.data.data.object_list   
        })
    },
    computed:{
       ...mapGetters(["computeTotal"])
    },
    methods:{
     ...mapActions(['addGoodInCars']),
        wlf(type){
          console.log(type)
          this.price=type,
          this.details=""
           this.$http.get("/api/splist",{
           params:{
           type,
         
          }
        }).then(res=>{
           
            this.details=res.data.data.object_list   
        })
        }
    }
}

</script>

<style lang ="scss">
.aaa{
  width:0.25rem;
  height:0.2rem;
  position:fixed;
   bottom:1.3rem;right:0.2rem;
   background:#fd3d3d;
   color:white;
   border-radius: 5px;
   text-align: center;
   line-height: 0.2rem;
   
}
.opt{
  width:0.4rem;
  height:0.4rem;
  position:fixed;
  bottom:1rem;right:0.2rem;
  background: url(//img05.yiguoimg.com/d/web/180508/01311/150610/cart1.png);
  background-size: 0.4rem  0.4rem;
}
  .all{
    background: white;
 
    height:60px;
    width:100%;
    display: flex;
    line-height: 60px;
    justify-content: space-around;
    position:fixed;
    top:0; 
    z-index:999
  }
  .active{
    color:#11B57c;
  }
  .div1{
    padding-top:60px;
  }
  .out{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    .img{
      width: 1.5rem;
      img{
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .inforPro{
    display: flex;
    width:2.25rem;
    height:1.4rem;
    .title{
      margin-top:10px;
    color: #333;
    height:0.2rem;
    width:2.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    font-size:0.15rem;
    line-height: .2rem;
    }
    .txt{
       margin-top:10px;
     font-size: .12rem;
    color: #808080;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    }
    .price{
      position: relative;
     height: .8rem;
    padding-top: .3rem;
    margin-right:25px;
    z-index: 10;
    .priceRed{
      font-size: .16rem;
    color: #fd3d3d;
    padding-right:0.15rem;
    }
    .standard{
     font-size: .14rem;
    color: #808080;
    line-height: .18rem;
    padding-right: .2rem;
    }
    .addCart{
    z-index: 100;
    position: absolute;
    right: 0;
    top: .3rem;
    width: .3rem;
    height: .3rem;
    background: url(//img05.yiguoimg.com/d/web/180508/01311/150610/add.png) no-repeat;
    background-size: 100% 100%
    }
    }
    }
  }
  
</style>