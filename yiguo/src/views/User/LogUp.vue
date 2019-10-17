<template>
    <div class="logup">
        <form>
            <div class="input-item">
                <div class="input-item-list">
                    <input type="tel" placeholder="请输入您的手机号" value="" maxlength="11" v-model="username"> 
                    <span class="btn-captcha">获取验证码</span>
                </div> 
                <div class="input-item-list">
                    <input type="text" placeholder="请输入您的验证码"> 
                    <i class="close" style="display: none;"></i>
                </div> 
                <div class="input-item-list">
                    <input type="password" placeholder="请设定您的密码" v-model="password">
                    <i class="close" style="display: none;"></i>
                </div>
                <div class="input-item-list">
                    <input type="password" placeholder="请再次输入您的密码" v-model="twopassword"> 
                    <i class="close" style="display: none;"></i>
                </div>
            </div> 
            <div class="label-box">
                <label for="label">
                    <input type="checkbox" id="label">我已阅读
                        <a class="green">《易果服务协议》</a>
                        <a class="green">《隐私条款》</a>
                        并同意
                </label>
            </div> 
            <div class="btn-login">
                <button type="button" class="btn_green w60p" @click="inlogup">注册</button>
            </div> 
            <div class="bottomcopyright">
                <em class=" icon yiguo_logo"></em>
            </div>
        </form> 
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import axios from 'axios'
export default {
    data(){
        return{
            username:null,
            password:null,
            twopassword:null
        }
    },
    methods:{
        inlogup(){
            if(this.password === this.twopassword){
                let param = new URLSearchParams()
                param.append('username',this.username)
                param.append('password',this.password)
                axios({
                    method: 'post',
                    url: '/api/register',
                    data: param
                }).then(res=>{
                    MessageBox.alert("",{
                        title: '提示',
                        message: res.data.result,
                    }).then(action => {
                        if(res.data.result === "注册成功"){
                            this.$router.push({
                                path:"/login"
                            })
                        }
                    })
                })
            }else{
                MessageBox({
                    title: '提示',
                    message: '两次密码不一致！',
                });
            }
        }
    }
}
</script>

<style lang="scss">
    .error{
        width:50px;
        height:20px;
        background: red;
    }
</style>