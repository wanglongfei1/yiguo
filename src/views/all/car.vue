<template>
    <div class="list">
        <div v-if="cars.length===0">
            <p class="img"><img src="img07.yiguoimg.com/d/web/180313/013112/195558/img_nogoods@3x.png" alt=""></p>
           <div class= "car">
               购物车空空的，快去逛逛吧。
           </div>
            <router-link tag ="p" class="mai" to="/all">去逛逛！</router-link>
        </div>
        

        <!-- 11111111 -->
        <div  v-else class="top">
            <div>登录可同步购物车内商品</div>
            <router-link to="hh" tag="div" class="top1" >登录</router-link>
        </div>
        <div>
           <div class="goods" v-for="car in cars"
           :key="car.CommodityId">
               <div class="check">
                   <i class ="active"></i>
               </div>
               <div class="ig ">
                   <img :src="car.SmallPic" alt="">
               </div>
               <div class="text">
                   <h2 class="elli2">{{car.CommodityName}}</h2>
                   <p class ="pr">￥ {{car.OriginalPrice}}</p>
               </div>
               <div class="del" @click="remove(car)">
                   <i></i>
               </div>
               <div class="add"> 
                   <span class="a" @click="reduceGoodInCars(car)">-</span>
                   <span class="c">{{car.num}}</span>
                   <span class="b" @click="addGoodInCars(car)">+</span>
               </div>
           </div>

        </div>
        <div class="sum">
            <span class="sp">合计（不含运费）:￥</span>
            <span class="jq">{{computeTotal.price}}</span>
            <span class="sm">去结算（{{computeTotal.num}}）</span>
        </div>
        <!-- <div>总价格：{{computeTotal.price}}           去结算：{{computeTotal.num}}</div> -->
    </div>
</template>

<script>
import {mapActions,mapState,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState({
            cars:state=>state.myCar.cars
        }),
        ...mapGetters(["computeTotal"])
    },
    methods:{
        ...mapActions(["addGoodInCars","reduceGoodInCars","remove"])
    }
}
</script>

<style lang="scss">
.sum{
    width:100%;
    height:0.4rem;
    background: white;
    z-index:111;
    position:fixed;
    bottom:0;
    text-align: center;
    .jq{
        display: inline-block;
        width:0.9rem;
        
        height:0.4rem;
        position:absolute;
        left:1.5rem;
        text-align: center;
        line-height: 0.4rem;
        color:#fb3d3d;
         font-size:0.13rem;
       
    }
    .sp{
        display: inline-block;
        width:1.3rem;
        height:0.4rem;
        position:absolute;
        left:0.3rem;
        line-height: 0.4rem;
       
    }
    .sm{
         display: inline-block;
        width:1.1rem;
         background:#fb3d3d;;
        height:0.4rem;
        position:absolute;
        right:0;
        line-height: 0.4rem;
        color:#fff;
        font-size:0.13rem;
       
        
    }
}
.add{
    position: absolute;
    width:0.6rem;
    height:0.2rem;
   
    top:0.6rem;
    right:0.1rem;
    line-height: 0.3rem;
    .a{
        font-size:0.2rem;
        line-height: 0.2rem;
        display: inline-block;
        width:0.2rem;
        height:0.2rem;
       
    }
    .b{
        font-size:0.2rem;
        line-height: 0.2rem;
        display: inline-block;
        width:0.2rem;
        height:0.2rem;
        // background:yellow;
    }  
    .c{
        font-size:0.15rem;
        line-height: 0.1rem;
        display: inline-block;
        width:0.2rem;
        height:0.2rem;
        // background:yellow;
    }
}
.xz{
    z-index:111;
    position: absolute;
            top: .4rem;
            left: 0.05rem;
            width: 0.2rem;
            height: .2rem;
            text-align: center;
    background-image: url(//img06.yiguoimg.com/d/web/180508/01316/175209/check2.png);
}
.del{
    position:absolute;
    top:0.2rem;
    right:0.1rem;
    width:0.2rem;
    height:0.2rem;
   
    i{
        display: block;
        width: 0.2rem;
        height: 0.2rem;
        background:url("//img07.yiguoimg.com/d/web/180119/01642/141511/del.png") center right no-repeat;
        background-size:0.2rem 0.2rem;

       
    }
}
.top{
    width:100%;
    height:0.4rem;
    background:white;
    position: fixed;
    top:0;
    z-index: 111;
    display: flex;
    justify-content:center;
    line-height: 0.4rem;
    border-bottom:1px solid #999;
    .top1{
        
        height:0.3rem;
        width:0.6rem;
        padding-left:0.2rem;
        text-align: center;
    }
    
}
.text{
    margin-left:10px;
   h2{
    
    height: 0.62rem;
    width:2.15rem;
    line-height: .32rem;
    font-size: .15rem;
    font-weight: normal;
    margin-top:5px;
    text-align: start;
   }
    .pr{
        display:inline-block;
        font-size:0.2rem;
        width:1.2rem;
        height:0.2rem;
        margin-top:10px;
        color:red;
        text-align: start;
        line-height: 0.2rem;
    }
   
}
.ig{
    width: 1rem;
     margin-left:0.2rem;
         height: 1rem;
    img{
         width: 1.0rem;
         height: 1rem;
    }
}
.list{
    padding-top:0.4rem;
    padding-bottom:0.4rem;
}
    .car{
        font-size:0.15rem;
        text-align: center;
        padding-top:0.5rem;
    }
    .img{
        img{
         width: 1.5rem;
         height: 1.5rem;
        }
    background: url(//img07.yiguoimg.com/d/web/180313/013112/195558/img_nogoods@3x.png) no-repeat center;
    background-size: auto 100%;
    }
    .mai{
        width:0.8rem;
        height:0.4rem;
        position: absolute;
        line-height: 0.4rem;
        left:0.2rem;
        color:#11b57c;
        margin-left:1.3rem;
        text-align: center;
        border:1px solid #11b57c;
        margin-top:0.2rem;
        border-radius:6px;
    }
    .goods{
        border-bottom:1px solid #999;
        display: flex;
        position:relative;
        .check{
            position: absolute;
            top: .4rem;
            left: 0.05rem;
            width: 0.2rem;
            height: .2rem;
            text-align: center;
            i{
                display: inline-block;
                width: .2rem;
                height: .2rem;
                background: url(//img06.yiguoimg.com/d/web/180119/01641/141347/check1.png) no-repeat;
                background-size: 100%;
            }
        }
    }
</style>
