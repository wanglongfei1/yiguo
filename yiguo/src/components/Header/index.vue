<template>
<div>
    <div class="header" v-if="!isserach">
        <div  class="left" @click="filtershow">{{lscity}}</div>
        <div class="search">
            <div class="warp">
                 <span class="iconfont">&#xe530;</span>
                <input type="text" placeholder="请输入商品名称" >
            </div>
        </div>
        
    </div>
       <div class="header headerone" v-if="isserach">
      
        <div class="search">
            <div class="warp">
                 <span class="iconfont">&#xe530;</span>
                <input type="text" placeholder="请输入商品名称" >
            </div>
        </div>
        <div class="btn" v-if="isserach">
            搜索
        </div>
    </div>
    <div class="filter" v-if="isfilter">
        <ul>
            <li>
                <dl>
                    <dt>A</dt>
                    <dd v-for="city in citys" :key="city.id" @click="showcity(city.city)">
                       {{city.city}}</dd>
                   
                </dl>
            </li>
            <li>
                <dl>
                    <dt>A</dt>
                    <dd v-for="city in citys" :key="city.id" @click="showcity(city.city)">
                       {{city.city}}</dd>
                   
                </dl>
            </li>
            <li>
                <dl>
                    <dt>A</dt>
                    <dd v-for="city in citys" :key="city.id" @click="showcity(city.city)">
                       {{city.city}}</dd>
                   
                </dl>
            </li>
            <li>
                <dl>
                    <dt>A</dt>
                    <dd v-for="city in citys" :key="city.id" @click="showcity(city.city)">
                       {{city.city}}</dd>
                   
                </dl>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    // 传参显示哪个默认显示 主页的header
    props:{
        isserach:{
            default:false
        }
    },
    data(){
        return{
            isfilter:false,
            lscity:"青岛",
            citys:[
                {id:1,city:"济南"},
                {id:2,city:"青岛"},
                {id:3,city:"杭州"},
            ]
        }
    },
    methods:{
        filtershow(){
            this.isfilter=!this.isfilter;
        },
        showcity(a){
            this.lscity=a;
            this.filtershow();
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        width:100%;
        height:0.45rem;
        background:green;
        display: flex;
        justify-content: space-between;
        .left{
            color:#fff;
            font-size:16px;
            margin-top:0.13rem;
            margin-left:0.15rem
        }
        .search{
            margin-top:0.08rem;
           margin-right: 0.1rem;
            width:3rem;
            border: 1px solid #ccc;
            border-radius: 0.15rem 0.15rem ;
            height:0.3rem;
            display: flex;
            background: #fff;
            align-items:center;
            .iconfont{
                color: #ccc;
                margin-left: 0.08rem;
                }
            input{
               width:2.6rem;
               height:0.26rem; 
               margin-left:0.04rem;
               font-size:16px;
               border:none;
            }
        }
        .btn{
           color:green;
           font-size:16px;
           margin:0.12rem 0.25rem 0 0 ;
        }
    }
    .filter{
        width: 100%;
        top:0.45rem;
        height: 100%;
        background: rgba(0,0,0,0.6);
        position: fixed;
        z-index: 99;
        color:#fff;
        ul{
            width:100%;
            dt{
               background: #fff;
                color: #ccc;  
            }
            dd{
                border-top:1px solid #ccc;
                background: #fff;
                color: #ccc;
                height:0.3rem;
                font-size: 14px;
            }
        }
        
    }
    .headerone{
        background: #fff;
        border-bottom:1px solid  #ccc;
        .search{
            margin-left:0.05rem;
            background: #ccc;
            input{
                background: #ccc;
            }
            .iconfont{
                color: #fff;
                margin-left: 0.08rem;
                }
        }
    }
</style>