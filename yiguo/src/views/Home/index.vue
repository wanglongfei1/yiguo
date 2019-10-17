<template>
    <div class="home">
        <div class="header-box">
            <Header></Header>
        </div>
        <!-- 上半部分 -->
        <div class="first-screen">
            <Banner></Banner>
            <!-- 8图 -->
            <div class="first-screen-menu clear" style="background-color: rgb(255, 255, 255);">
                <router-link
                    to=""
                    class="one"
                    v-for="nav in navs"
                    :key="nav._id+Math.random()"
                >
                    <div v-if="!navs" class="loading2" ></div>
                    <div v-else>
                        <i><img v-lazy="nav.pictureUrl"></i> 
                        <p class="one-title" style="color: rgb(51, 51, 51);">{{nav.navName}}</p>
                    </div>
                </router-link>
            </div>
            <!-- 广告 -->
            <div 
                class="first-screen-ad"
                v-for="advertising in advertisings"
                :key="advertising._id"
            >
                <img :src="advertising.pictureUrl">
            </div>
            <!-- 快报 -->
            <div class="first-screen-news">
                <i class="title"></i> 
                <div class="swiper-container news-banner">
                    <div class="swiper-wrapper">
                        <div 
                            class="swiper-slide"
                            v-for="trumpet in trumpets"
                            :key="trumpet._id"
                        >{{trumpet.fastReportTitle}}</div>
                        <!-- <div class="swiper-slide">工行e支付满100减30！</div>
                        <div class="swiper-slide">移动/联通积分免费兑储值卡</div>
                        <div class="swiper-slide">不良信息投诉与举报</div>
                        <div class="swiper-slide">营业资质公示，详情请点击查询</div>
                        <div class="swiper-slide">工行e支付满100减30！</div> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- 左右滑动 -->
        <div class="group-floor">
            <a href="javascript:;" class="floor-img">
                <img src="https://img13.yiguoimg.com/d/items/2019/190926/9570214234498874_1125x652.png?w=1125&amp;h=652">
            </a> 
            <div class="product-list clear noFloorImg">
                <div class="product-list-in">
                    <div 
                        class="proitem"
                        v-for="timeGood in timeGoods"
                        :key="timeGood._id+Math.random()"
                    >
                        <div class="pic">
                            <a class="pic-a">
                                <img v-lazy="timeGood.SmallPic">
                            </a>
                            <div class="saletip">
                                <span>限时抢购</span>
                            </div>
                        </div> 
                        <div class="info">
                            <p class="name">
                                <a>{{timeGood.CommodityName}}{{timeGood.Spec}}</a>
                            </p>
                            <div class="price">
                                <strong>{{timeGood.SellPrice}}</strong>
                                <i class="price-addcart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 图片物品 -->
        <div class="one-image">
            <a href="javascript:;" class="link-img">
                <img src="https://img14.yiguoimg.com/d/items/2019/190624/9288738348345048_1125x149.jpg?w=1125&amp;h=149">
            </a>
        </div>
        <div
            class="one-image"
            v-for="pic in pics"
            :key="pic._id"
        >
            <a class="link-img">
                <img v-lazy="pic.adPictures[0].pictureUrl">
            </a>
        </div>
        <!-- 左右图 -->
        <div class="two-image clear">
            <div class="link-img1">
                <a href="javascript:;">
                    <img src="https://img13.yiguoimg.com/d/items/2019/190329/9288737670440573_658x819.jpg?w=658&amp;h=819">
                </a>
            </div>
            <div class="link-img1">
                <a href="javascript:;">
                    <img src="https://img09.yiguoimg.com/d/items/2019/190304/9288737491789412_658x819.jpg?w=658&amp;h=819">
                </a>
            </div>
        </div>
        <!-- 商品列表 -->
        <div class="prolist pt">
            <div class="blockwrap prolist-blockwrap">
                <ul
                    v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="loading"
                    infinite-scroll-distance="10" 
                >
                    <li
                        v-for="good in goods"
                        :key="good._id+Math.random()"
                    >
                        <div class="proitem">
                            <div class="pic">
                                <a>
                                    <img v-lazy="good.SmallPic">
                                </a>
                            </div>
                            <div class="info">
                                <div class="info-wrap">
                                    <p class="name">
                                        <a>{{good.CommodityName}}</a>
                                    </p>
                                    <p class="sub">
                                        <span class="saletip">
                                            <span>产地直发</span>
                                        </span>
								        {{good.SubTitle}}
							        </p>
                                </div>
                                <div class="price pricePadding">
                                    <strong>￥{{good.SellPrice}}</strong>/{{good.Spec}}
							        <i class="price-addcart">详情</i>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <BackTop></BackTop>
        <!-- 底部导航 -->
        <div class="tabbar-box">
            <TabBar></TabBar>    
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import Banner  from "./Banner"
import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
import BackTop from "@/components/BackTop"
import { Toast } from 'mint-ui';
export default {
    name:"home",
    components:{
        Banner,Header,TabBar,BackTop
    },
    data(){
        return{
            navs:[],//导航
            advertisings:[],//广告1张
            trumpets:[],//小喇叭
            pics:[],
            goods:[],
            timeGoods:[],
            page:1,
            limit:5,
            loading:false,
            hasMore:true
        }
    },
    methods:{
        loadMore(){
            if(!this.hasMore){
                Toast({
                    message:'没有更多了...',
                    position:"bottom"
                })
                this.loading = true
                return false
            }
            this.getMovies()
        },
        getMovies(){
            let instance = Toast({
                message:"正在拼命加载...",
                duration:-1,
                iconClass:'fa fa-cog fa-spin'
            })
            let {page,limit} = this
            this.loading = true
            this.$http.get("/api/splist",{
                params:{
                    limit,
                    page
                }
            }).then(res=>{
                this.timeGoods = res.data.data.object_list.slice(0,5)
                this.goods = this.goods.concat(res.data.data.object_list)
                this.loading = false
                instance.close()
                if(res.data.data.object_list.length === 0){
                    this.hasMore = false
                    return false
                }
                this.page++
            })
        }
    },
    activated(){
        this.loading = false
        window.scrollTo(0,this.backHome)
    },
    deactivated(){
        this.loading = true
    },
    beforeRouteLeave(to, from, next){
        this.backHome = document.body.scrollTop || document.documentElement.scrollTop
        next()
    },
    created(){
        this.$http.get("/api/navlist").then(res=>{
            this.navs = res.data.data.object_list.splice(0,8)
        })
        this.$http.get("/api/banner").then(res=>{
            this.advertisings = res.data.data.object_list.splice(0,1) 
        })
        this.$http.get("/api/laber").then(res=>{
            this.trumpets = res.data.data.object_list.splice(0,4)
            this.$nextTick(()=>{
                new Swiper(".news-banner",{
                    autoplay:true,
                    loop:true,
                    direction: 'vertical',
                })
            })
        })
        this.$http.get("/api/surper").then(res=>{
            this.pics = res.data.data.object_list.splice(0,5)
        })
        this.getMovies()
    }  
}
</script>

<style lang="scss">
    .header-box{
        position: fixed;
        top:0;
        width:100%;
        z-index: 100;
    }
</style>