<template>
  <div class="bottom-box">
      <div class="bottom">
          <div class="left">
              <dl>
                  <dt><i>fdg</i></dt>
                  <dd>首页</dd>
              </dl>
               <dl>
                  <dt><i>gfdg</i></dt>
                  <dd>购物车</dd>
              </dl>
          </div>
          <div class="shop">
              <a href="">加入购物车</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .bottom-box{
        width:100%;
        position: fixed;
        bottom:0;
        left:0;
        .bottom{
            height:0.5rem;
            width:100%;
            background:#fff;
            border-top:1px solid #ccc;
            overflow: hidden;
            .left{
               
                width:1.5rem;
                height:0.5rem;
                float:left; 
                display:flex;
                align-items:center;
                justify-content:space-between;
                padding:0 0.3rem;
                dl{ 
                    color:#8d8a8a;
                   
                }

            }
            .shop{
                float:right;
                a{
                    text-align: center;
                    line-height:0.5rem;
                    display:block;
                    width:2.25rem;
                    height:0.5rem;
                    background:red;
                    color:#fff;
                    font-size:16px;
                }
            }
        }
    }
</style>