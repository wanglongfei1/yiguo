<template>
    <div class="logup">
        <form>
            <div class="input-item">
                <div class="input-item-list">
                    <input type="tel" placeholder="请输入您的手机号" value="" maxlength="11"> 
                    <span class="btn-captcha">获取验证码</span>
                </div> 
                <div class="input-item-list">
                    <input type="text" placeholder="请输入您的验证码"> 
                    <i class="close" style="display: none;"></i>
                </div> 
                <div class="input-item-list">
                    <input type="password" placeholder="请设定您的密码"> 
                    <i class="close" style="display: none;"></i>
                </div>
                <div class="input-item-list">
                    <input type="password" placeholder="请再次输入您的密码"> 
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
                <button type="button" class="btn_green w60p">注册</button>
            </div> 
            <div class="bottomcopyright">
                <em class=" icon yiguo_logo"></em>
            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    
</style>