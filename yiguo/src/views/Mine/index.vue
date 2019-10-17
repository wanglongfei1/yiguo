<template>
    <div class = "mine">
        <div class="header">
            <p><img src="../../assets/no-pic.jpg" alt=""></p>
            <p>
                <a href="">登录</a><span>/</span><a href="">注册</a> 
            </p>
            <i class = "fa fa-cog fa-fw"></i>
        </div>
        <div class="centera">
            <p>
                <span>-</span>
                <span>卡包余额</span>
            </p>
            <p>
                <span>-</span>
                <span>悠币</span>
            </p>
        </div>
        <div class="centerb">
            <div>
                <img src="../../assets/unpaid.png" alt="">
                <p>待支付</p>
            </div>
            <div>
                <img src="../../assets/take.png" alt="">
                <p>待收货</p>
            </div>
            <div>
                <img src="../../assets/evaluate.png" alt="">
                <p>评价送悠币</p>
            </div>
            <div>
                <img src="../../assets/changing.png" alt="">
                <p>在线退换货</p>
            </div>
            <div>
                <i class = "fa fa-file-text"></i>
                <p>全部订单</p>
            </div>
        </div>
        <div class="centerc">
            <div>
                <img src="../../assets/coupons.png" alt="">
                <p>优惠券</p>
            </div>
            <div>
                <img src="../../assets/yellowcard.png" alt="">
                <p>充值卡</p>
            </div>
            <div>
                <img src="../../assets/delivery.png" alt="">
                <p>礼品兑换券</p>
            </div>
            <div>
                <img src="../../assets/address.png" alt="">
                <p>收货地址</p>
            </div>
        </div>
        <div class="centerd">
            <div>
                <img src="../../assets/help.png" alt="">
                <p>帮助中心</p>
            </div>
            <div>
                <img src="../../assets/box@3x.png" alt="">
                <p>我的团购</p>
            </div>
            <div>
                <img src="../../assets/account-icon.png" alt="">
                <p>账户余额</p>
            </div>
            <div>
                <img src="../../assets/service.png" alt="">
                <p>在线客服</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
styl
<style lang = "scss" scoped>
    body{
        background:rgb(244,244,244);
    }
    .header{
        width:100%;
        height:1.42rem;
        background-image:linear-gradient(to bottom right, rgb(109,229,167), rgb(14,179,123));
        display:flex;
        align-items:center;
        position:relative;
    }
    .header p:nth-of-type(1){
        width:0.69rem;
        height:0.69rem;
       margin-left:0.16rem;
    }
    .header p:nth-of-type(1) img{
        width:100%;
        height:100%;
        border-radius:50%;
    }
    .header p:nth-of-type(2){
        margin-left:0.2rem;
    }
    .header p:nth-of-type(2) a,span{
        font-size:0.16rem;
        color:white;
    }
    .header i{
        font-size:20px;
        position:absolute;
        top:0.08rem;
        right:0.1rem;
    }
   .centera{
       width:100%;
       height:0.54rem;
       display:flex;
       justify-content:space-around;
       background:white;
        /* align-items:center; */
   }
   .centera p{
       display:flex;
       flex-flow:column;
       align-items:center;
       margin-top:0.08rem;
   }
   .centera p span{
       color:black;
       
   }
   .centera p span:last-child{
       font-size:0.12rem;
   }
   .centerb{
       width:100%;
       height:0.81rem;
       display:flex;
       background:white;
       margin-top:0.13rem;
       align-items:center;
       justify-content:space-around;
   }
   .centerc{
       width:100%;
       height:0.81rem;
       display:flex;
       background:white;
       margin-top:0.13rem;
       align-items:center;
       justify-content:space-around;
   }
   .centerd{
       width:100%;
       height:0.81rem;
       display:flex;
       background:white;
       align-items:center;
       justify-content:space-around;
   }
   .centerb div{
       display:flex;
       flex-flow:column;
       align-items:center;
   }
   .centerb i{
       font-size:0.2rem;
   }
   .centerc div{
       display:flex;
       flex-flow:column;
       align-items:center;
   }
   .centerd div{
       display:flex;
       flex-flow:column;
       align-items:center;
   }
   .centerb div p{
       font-size:0.12rem;
       margin-top:0.1rem;
   }
   .centerc div p{
       font-size:0.12rem;
       margin-top:0.05rem;
   }
   .centerd div p{
       font-size:0.12rem;
       margin-top:0.05rem;
   }
   .centerb div img{
       width:0.24rem;
       height:0.2rem;
   }
   .centerc div img{
       width:0.35rem;
       height:0.35rem;
   }
   .centerd div img{
       width:0.35rem;
       height:0.35rem;
   }
</style>