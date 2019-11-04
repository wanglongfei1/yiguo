<template>
    <div class="login">
        <form>
            <div class="input-item">
                <div class="input-item-list username">
                    <span class="fa fa-user"></span> 
                    <input type="text" placeholder="请输入您的用户名" v-model="username"> 
                    <i class="close" style="display: none;"></i>
                </div> 
                <div class="input-item-list password">
                    <span class="fa fa-key"></span> 
                    <input type="password" placeholder="请输入您的密码" v-model="password"> 
                    <i class="close" style="display: none;"></i>
                </div> 
                <div class="input-item-list password">
                    <input type="text" placeholder="请输入验证码" style="width: 65%; border: none; float: left;"> 
                    <img src="data:image/gif;base64,R0lGODlhMgAWAPcAAAAAAAAAMwAAZgAAmQAAzAAA/wArAAArMwArZgArmQArzAAr/wBVAABVMwBVZgBVmQBVzABV/wCAAACAMwCAZgCAmQCAzACA/wCqAACqMwCqZgCqmQCqzACq/wDVAADVMwDVZgDVmQDVzADV/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMrADMrMzMrZjMrmTMrzDMr/zNVADNVMzNVZjNVmTNVzDNV/zOAADOAMzOAZjOAmTOAzDOA/zOqADOqMzOqZjOqmTOqzDOq/zPVADPVMzPVZjPVmTPVzDPV/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YrAGYrM2YrZmYrmWYrzGYr/2ZVAGZVM2ZVZmZVmWZVzGZV/2aAAGaAM2aAZmaAmWaAzGaA/2aqAGaqM2aqZmaqmWaqzGaq/2bVAGbVM2bVZmbVmWbVzGbV/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5krAJkrM5krZpkrmZkrzJkr/5lVAJlVM5lVZplVmZlVzJlV/5mAAJmAM5mAZpmAmZmAzJmA/5mqAJmqM5mqZpmqmZmqzJmq/5nVAJnVM5nVZpnVmZnVzJnV/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wrAMwrM8wrZswrmcwrzMwr/8xVAMxVM8xVZsxVmcxVzMxV/8yAAMyAM8yAZsyAmcyAzMyA/8yqAMyqM8yqZsyqmcyqzMyq/8zVAMzVM8zVZszVmczVzMzV/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8rAP8rM/8rZv8rmf8rzP8r//9VAP9VM/9VZv9Vmf9VzP9V//+AAP+AM/+AZv+Amf+AzP+A//+qAP+qM/+qZv+qmf+qzP+q///VAP/VM//VZv/Vmf/VzP/V////AP//M///Zv//mf//zP///wAAAAAAAAAAAAAAACH5BAEAAPwALAAAAAAyABYAAAj/AIkpE0hwoMGCCA8qTMhwoTJl+yJGhCCxosRMET8Rs8iRo559mSBaJIax4kAbJU1GJPZFopyOjDpyVBXxYUQh+zQNA0VQIy5FOgdqVBZSkzI/oHbuTKaJFAdiQwWGBKSMp8aNHFuo3KfMqK1kAjnS2Bi24w2ONm/J1IcqVb2B+VDJ9bWPGFg8tOQ2kljLj9+/fnBJ1LIPATFNMvex8SaNJqhdciMLJuptmB+5b4RkOnK5Myo/lD7sm5QqGVeIdhOSkxuujD5XqNDtY9cW4hVUNNn5oSlxYDK/UCwiJjasI6haqKRJu6Vs3VxlwtrW+SS3GBaZn1z5+YMYbdeuTMHK/5Nmy1uqiMPyUtvnXC2vW5c/+/ped5gCVFzS1BUpcdhGsGJ0FR01wlBCzWHK6CNNZKoIFElkl6USTWrs+bEJVugNVJMyDVSk4DTLsCNNSMMkA1tkahGzmoTpobLXPqDohoojdfEESk5g5bSRGhHp4w0q9eiQlzv7bPCjWsmgUoEvoNDiB3PEKIIKVvP4gQwjRu0DVo77jHJaRSIql1xytwyzoC/E+IhKLyG0p4mJfvjyxjCEoAJIajeuNBBZGO5jwZgLLmjXgsvM1lY9+/CCCizKKJqKJsQ4mUpInijjHzF59safRSLeUxcxW4yJyhDMaYKMZ370QkwwnbXqR5YWZZFSXEe0uQPranKpCpalkfVSV3R+PPLZX5QMY6lJEG1hUQAr1ZiQDxJl2h9aEZkGY3FFHLbSrqlVZaxSOTkTEQl1ybRps91VJFA2ERlVVAME8WSQsZBChaEBwqHVCUc8SUTMG6UcpJG1EiXRm0R09bkPGvtcoS5HAhllbGpMGSSxvHZJbBSm8XabsaVJDcTTrgEBADs=" class="yzcode">
                </div>
            </div> 
            <div class="login-option clear">
                <span class="retrieve_password">
                    <a href="javascript:;">忘记密码?</a>
                </span>
            </div> 
            <div class="btn-login clearfix">
                <button type="button" class="btn_green myleft" @click="inlogin">登录</button> 
                <button type="button" class="btn_white myright" @click="logup">立即注册</button>
            </div>
        </form>
        <div class="bottomcopyright">
            <em class=" icon yiguo_logo"></em>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            username:null,
            password:null
        }
    },
    methods:{
        logup(){
            this.$router.push({
                path:"/logup"
            })
        },
        inlogin(){
            let param = new URLSearchParams()
            param.append('username',this.username)
            param.append('password',this.password)
            axios({
                method: 'post',
                url: '/api/login',
                data: param
            }).then(res=>{
                MessageBox.alert("",{
                    title: '提示',
                    message: res.data.result,
                }).then(action =>{
                    // console.log(res.data.result);
                    if(res.data.result === "登录成功"){
                        this.$router.push({
                            path:"./home"
                        })
                    }
                })
            })
        }
    }
}
</script>

<style>

</style>