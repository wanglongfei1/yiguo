<template>
    <div class="Classify">
        <div class="header">
            <form action="">
                <i class = "fa fa-search"></i>
                <input type="text" placeholder = "请输入商品名称">
            </form>
            <p>搜索</p>
        </div>
        <div class="center">
            <div class = "centerleft">
                <ul>
                    <li
                        v-for = "nav in navs"
                        :key = "nav.CategoryId"
                        :class = "{active:nav.CategoryName === sgName}"
                         @click = "a(nav.CategoryName)"
                    >{{nav.CategoryName}}
                    </li>
                    
                </ul>
            </div>
            <div class = "centerright">
                <div
                    v-for = "cson in son"
                    :key = "cson.CategoryId"
                >
                    <img :src="cson.PictureUrl" alt="">
                    <p>{{cson.CategoryName}}</p>
                </div>
                 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            num:0,
            navs:[],
            son:[],
            sgName:"进口水果",
        }
    },
    created(){
        this.$http.get("/api/classify").then(res => {
            
            this.navs = res.data.data.object_list
            // this.son = res.data.data.object_list[0].Childs
            console.log(res.data.data.object_list)
        })
         this.$http.get("/api/classify",{
                  params:{
                   name:"进口水果"
                }
            }).then(res => {
              
                this.son = res.data.data.object_list[0].Childs
            
            }) 
    },
    methods:{
        a(name){
            this.sgName = name
            this.$http.get("/api/classify",{
                  params:{
                   name:name
                }
            }).then(res => {
              
                this.son = res.data.data.object_list[0].Childs
            
            }) 
        }
    }
    
}
</script>

<style lang = "scss">
    .header{
        width:100%;
        height:0.43rem;
        background:white;
        border-bottom:1px solid #999;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .header form input{
        margin-left:0.15rem;
        width:3.0rem;
        height:0.26rem;
        border-radius:0.1rem;
        background:rgb(244,244,244);
        text-indent:0.23rem;
        border:none;
    }
    .header p{
        margin-right:0.15rem;
        color:rgb(17,181,124)
    }
    .header i{
        position:absolute;
        left:0.22rem;
        top:0.15rem;
        color:#999;
    }
    .center{
       width:100%;
    }
    .center .centerleft{
        width:0.86rem;
         float:left;
    }
    .center .centerleft ul{
        width:0.86rem;
        background:rgb(244,244,244);
    }
    .center .centerleft ul li{
        width:0.86rem;
        height:0.52rem;
        text-align:center;
        line-height:0.52rem;
    }
    .center .centerright{
        width:72%;
        float:left;
        padding-left:0.15rem;
    }
    .center .centerright div{
        width:0.78rem;
        height:0.78rem;
        float:left;
        display:flex;
        flex-flow:column;
        justify-content:center;
        align-items:center;
        margin-right:0.05rem;
        margin-bottom:0.2rem;
    }
    .center .centerright img{
        width:50px;
        height:50px;
    }
    .active{
        background:white;
    }
</style>