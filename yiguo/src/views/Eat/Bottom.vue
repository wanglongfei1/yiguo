<template>
  <div class="bottom">
      <div class="deep">
            <div class="xin">
                <i></i>
                <span>206</span>
            </div>
            <div class="product">
                <span>相关商品</span>
            </div>
      </div>
     
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .bottom{
       
        
        .deep{
            position: fixed;
            bottom:0;
            height:0.5rem;
            width:100%;
            background:#fff;
            border-top:1px solid #ccc;
            .product{
                float:right;
                padding:0 30px;
                width:1.2rem;
                height:0.5rem;
                line-height:0.5rem;
                font-size:15px;
                background:#fb3d3d;
                color:#fff;
              
            }
            .xin{
            float: left;
            line-height:0.5rem;
        }
        }
       
    }
</style>