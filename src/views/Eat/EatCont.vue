<template>
  <div
   class="eatcont"
  
  >
      <div class="header">
          <span>
              <dl>
              <dt @click="cmj('做美食')"><img src="http://img13.yiguoimg.com/e/ad/2016/161020/586030925119660372_120x96.png" alt=""></dt>
              <dd>做美食</dd>
            </dl>
          </span>
            <span>
                 <dl>
                    <dt@click="cmj('涨知识')"><img src="http://img13.yiguoimg.com/e/ad/2016/161020/586030925119693140_120x96.png" alt=""></dt>
                    <dd>涨知识</dd>
                </dl>

            </span>
           <span >
              <dl>
              <dt @click="cmj('生活家')"><img src="http://img12.yiguoimg.com/e/ad/2016/161020/586030925119725908_120x96.png" alt=""></dt>
              <dd>生活家</dd>
            </dl>
          </span>

            <span>
                 <dl>
                    <dt @click="cmj('爱试吃')"><img src="http://img09.yiguoimg.com/e/ad/2017/170117/586030927703745073_120x96.png" alt=""></dt>
                    <dd>爱试吃</dd>
                </dl>

            </span>
      </div>

      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
      <div 
        class="item-box"    
        v-for="item in items"
        :key="item.id"
      > 

            <router-link  class="item" tag="div" :to="{name:'textdetail',params:{id:item.id}}">
                <div class="head">  
                    <a href="">
                        <span >{{item.classify}}</span>
                        <em>{{item.watch}}</em>
                        <img v-lazy="item.img" alt="">  </a>
                </div>
                <p class="title">{{item.title}}</p>                                
                <div class="bottom">
                    <div class="left">
                        <img v-lazy="item.headimg" alt="">
                        <span>{{item.name}}</span>
                    </div>
                    <div class="right">
                        <span>{{item.time}}</span>
                    </div>
                </div>
            </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            items:[],
            limit:6,
            page:1,
            loading:false,
            hasMore:true
        }
    },

    methods:{
        loadMore() {
            
            if(!this.hasMore){//数据没有了
            Toast({
                message:'到底了...',
                position:'bottom',
                duration: 2000
            })
                this.loading = true;
                return false;
            }
            this.getText()
            
        },
        getText(){
           let instance = Toast({
                message: '正在加载中...',
                position: 'bottom',
                duration: 5000
            });
            let {limit,page} = this;
            this.loading=true;//关闭无限滚动
            this.$http.get("api/eat",{
             params:{
                    limit,
                    page
                }
            }).then(res=>{
                this.items =this.items.concat(res.data.data.object_list) 
               
                this.loading = false; //无限滚动开启
               instance.close();
                if(this.limit*this.page >= 26){
                   this.hasMore=false;    
                } 
                this.page++
            })
        },
         cmj(type){
             let {limit,page} = this;
             this.items =[]
             let instance = Toast({
                message: '正在加载中...',
                duration: 5000
            });
             this.$http.get("api/eat",{
             params:{
                classify:type,
                limit:8    
                }
            }).then(res=>{
                this.items = res.data.data.object_list
                instance.close();
                 if(this.limit*this.page >=  res.data.data.current_total){
                   this.hasMore=false;    
                } 
            })   
        }
        
    }
}
</script>

<style lang="scss">
.eatcont{
    height:1000px;
    background:#f8f8f8;
    .header{
        background:#fff;
        height:0.9rem;
        display:flex;
        align-items:center ;
        border-bottom:1px solid #e3e3e3;
        margin-top:0.05rem;
        dl{
            width:0.5rem;
            height:0.6rem;
             margin-left:0.2rem;
             
            dt{
                img{
                    width:0.4rem;
                    height:0.32rem;
                    
                }
            }
            dd{
                font-size:14px;
                color:#808080;
                line-height: 28px;
            }
        }
    }
    .item-box{
        .item{
             position: relative;
             background:#fff;
             margin-top:0.1rem;
              border-bottom:1px solid #e3e3e3;
              border-top:1px solid #e3e3e3;

            .head{
                display: flex;
                justify-content: center;
                text-align: center;
               
                em{
                     width:0.6rem;
                    position: absolute;
                    top:0.2rem;
                    right:0.2rem;
                    background:rgba(255,255,255,.85);
                    font-size:12px;
                    border-radius:20px;


                }
                span{
                    width:0.6rem;
                   position: absolute;
                    top:0.2rem; 
                    left:0.1rem;
                    line-height: 24px;
                    background: #FF742E;
                    color:#fff;
                    border-radius:0 15px 15px 0;
                }
                img{
                    width:95%;
                    margin-top:0.1rem;
                    margin-left:0.1rem;
                }
               
            }
            .title{
                padding:14px 0;
                font-size:18px;
                color:#000; 
                margin:0 0.1rem;
                border-bottom:1px solid #f9f9f9;      
            }
            .bottom{
                background:#fff;
                overflow: hidden;
               
               .left{
                   float:left;
                    display: flex;
                     align-items:center ;
                    line-height:0.6rem;
                   img{
                       width:0.34rem;
                       margin-left:0.1rem;
                   }
                   span{
                       margin-left:0.1rem;
                   }
               }
               .right{
                   float:right;
                   height:0.6rem;
                   line-height:0.6rem;
                   margin-right:0.1rem;
               }
            }
               
        }
    }
}

</style>