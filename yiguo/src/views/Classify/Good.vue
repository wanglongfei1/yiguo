<template>
  <div class="good">
      <div class="good-all">
          <div class="heade" id="tit">
              <i @click="test">X</i>
              <span><img src="http://img13.yiguoimg.com/d/albums/2019/190829/153403927062423325_640.jpg" alt=""></span>
              <dl>
                  <dt>易果生鲜</dt>
                  <dd>新人立享80元优惠券</dd>
              </dl>
              <a href="">立即打开</a>
          </div>
          <div class="banner">
               <img src="https://img10.yiguoimg.com/d/items/2019/190329/9288737695704701_500.jpg" alt="">
          </div>
          <div class="content">
              <div class="title">
                  <p class="tit-txt">南非西柚2个270g以上/个</p>
                  <div class="copy-box">
                      <span class="copy">买1赠1</span>
                      <span>榨汁调饮 满口柚香</span>
                  </div>
                  <div class="pic-box">
                      <span class="pic">￥29.9</span>
                      <span class="local">产地：南非</span>
                  </div>       
              </div>
              <div class="promotion">
                  <div class="pro-box">
                      <span class="gay">促销</span>
                      <span class="you">优惠</span>
                      <span class="txt">买1赠1；满1件得赠品</span>
                  </div>
                  <div class="pro-box">
                      <span class="gays">不支持7天无理由退货</span>     
                  </div>
              </div>

              <div class="number">
                  <div class="numb">
                      <span class="gay">规格</span>
                      <span class="green">2/盒</span>
                  </div>
                  <div class="numb1">
                      <span class="gay">数量</span>
                      <span class="nu">
                            <span class="add">+</span>
                            <span class="null">1</span>
                        <span class="jian">-</span>
                      </span>
                    
                  </div>

              </div>

              <div class="here">
                  
                      <span class="gay">送至</span>
                      <span class="he">
                          <dl>
                              <dt>山东 青岛市 市北区</dt>
                              <dd><span>有货</span><span>16:00前完成订单，预计后天(10月19日送达)</span></dd>
                          </dl>
                      </span>
                      
                  

              </div>
          </div>
      </div>
      
      <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from './Bottom'

export default {
     components:{
        Bottom
    },
    methods:{
        test:function(){
            var app = document.getElementById("tit")
            app.style.display = "none"
        }
    }
}
</script>

<style lang="scss" scoped>
    .good{
        height:1000px;
        background:#f4f4f4;
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
            .banner{
                img{
                    width:100%;
                }
                
                
            }
            .content{ 
                
                .title{
                    background:#fff;
                   padding:0.1rem 0.16rem 0.2rem 0.16rem;
                    .tit-txt{
                        color:#333;
                        font-size:16px;
                    }
                    .copy-box{
                        margin:0.1rem 0;
                       
                        .copy{
                            border: 1px solid #01B27A;
                            color:#01B27A;
                            padding:0 0.05rem;
                            border-radius: .4rem;
                            font-size:12px;
                             margin-right:0.1rem;
                        }
                    }
                    .pic-box{
                        overflow: hidden;
                        .pic{
                           color:red;
                           font-size:19px;
                            float:left;
                            

                        }
                        .local{
                            float:right;
                        }
                    }
                }
                .promotion{ 
                 
                    .pro-box{
                          background:#fff;
                        padding:0.1rem 0.16rem;
                        border-top:1px solid #cccccc;
                        .gay{
                            color:#999;
                            font-size:13px;
                        }
                         .gays{
                            color:#999;
                            font-size:13px;
                        }

                        .you{
                            color:#01B27A;
                            border:1px solid #01B27A;
                            border-radius: 0.4rem;
                            padding:0 0.1rem;
                            font-size:12px;
                            margin-left:0.1rem;
                        }
                        .txt{
                            margin-left:0.1rem;
                        }
                    }
                }
                .number{ 
                    margin:0.1rem 0;
                   
                    background:#fff;
                    // padding:0.2rem 0;
                    .numb{
                       padding:0.2rem 0.16rem;
                       
                        .gay{
                            color:#999;
                            font-size:13px;
                        }
                         .green{
                            color:#01B27A;
                            border:1px solid #01B27A;
                            border-radius: 0.4rem;
                            padding:0.05rem 0.2rem;
                            font-size:14px;
                            margin-left:0.1rem;
                            margin-left:0.1rem;
                        }

                    }
                    .numb1{
                        padding:0.2rem;
                         border-top:1px solid #ccc;
                          .gay{
                            color:#999;
                            font-size:13px;
                        }
                        .nu{
                            margin-left:0.2rem;
                            
                            padding:0.05rem;
                            .add{
                                border:1px solid #ccc;
                                
                                padding:0.05rem;
                                border-radius:0.05rem 0 0 0.05rem;
                            }
                            .null{
                                padding:0.05rem 0.1rem;
                                border-top:1px solid #ccc; 
                                border-bottom:1px solid #ccc; 

                            }
                            .jian{
                                border:1px solid #ccc;
                                padding:0.05rem;
                                
                                border-radius:0 0.05rem 0.05rem 0;


                            }
                        }
                    }
                }
                .here{
                    display:flex;
                    margin:0.1rem 0;
                    background:#fff;
                    padding:0.1rem 0;
                     .gay{
                            color:#999;
                            font-size:13px;
                            padding-left:0.16rem;
                        }
                        .he{
                            margin-left:0.1rem;

                        }
                }
            }
        }
    }
</style>