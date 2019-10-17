<template>
  <div class="tabbar">
     <router-link to="/home" class="bottomNav_link">
      <span class="iconfont">&#xe6da;</span>
      <p>首页</p>
    </router-link>
    <router-link to="/classify" class="bottomNav_link">
      <span class="iconfont">&#xe616;</span>
      <p>分类</p>
    </router-link>
    <router-link to="/eat" class="bottomNav_link">
       <span class="iconfont">&#xe807;</span>
      <p>饭吧</p>
    </router-link>
    <router-link to="/all" class="bottomNav_link">
      <span class="iconfont">&#xe610;</span>
      <p>购物车</p>
    </router-link>
    <router-link to="/mine" class="bottomNav_link">
       <span class="iconfont">&#xe601;</span>
      <p>我的易果</p>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .tabbar{
        background: #fff;
        width:100%;
        height:0.5rem;
        position:fixed;
        bottom:0;
        border-top:1px solid #ccc;
        display: flex;
        justify-content: space-around;
         .bottomNav_link{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
             font-size:12px;
             .iconfont{
                 font-size:24px;
             }
        }
    }
    .router-link-active{
        color:green;
       
        }
</style>