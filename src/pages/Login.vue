<template>
<div class="container">
    <div class="loginComponentWrap">
        <div class="loginComponent">
            <div class="login-title">
                <img src="../assets/img/navigate-logo.png" alt="" id="login-title-logo">
                <span class="login-title-text" @click="backstep"> <返回上一级 </span>
            </div>
            <div class="login-type">
                <div class="login-phone">
                    <div class="login-phone-text">
                        <span>手机登录</span>
                    </div>
                    <div class="login-phone-input">
                        <input type="text" placeholder="请输入11位手机号码">
                    </div>
                    <div class="login-phone-input">
                        <input type="text" placeholder="验证码">
                        <a href="#">验证码</a>
                    </div>
                    <div>
                        <button class="login-button">立即登录</button>
                    </div>
                </div>
                <div class="loginwechat">
                    <div class="code">
                        <img src="../assets/img/qr.png" alt="">
                    </div>
                    <div class="code-text">
                        <p>使用微信扫一扫登录</p>
                            <p>美团招聘</p>
                    </div>
                </div>
            </div>
            <div class="login-agree">
                <label for="">
                    <input type="checkbox">
                    <span>我已阅读并同意</span>
                    <a href="#">《个人信息保护隐私措施》</a>
                </label>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="js" name="Login">
    function backstep(){
        window.history.back(-1);
    }
</script>

<style scoped>
    .container{
        background-color:#ffd000 ;
    }
    .loginComponentWrap{
        display: flex;
        width: 1280px;
        height: 524px;
        justify-content: center;
    }
    .loginComponent{
        background-color:#ffffff ;
        width: 890px;
        height: 458px;
        margin-top: 30px;
        border-radius: 20px;
    }
    #login-title-logo{
        width: 192px;
        height: 46.08px;
        margin-top: 30px;
        margin-left: 20px;
    }
    .login-title-text{
        font-size: 20px;
        margin-top: 35px;
        margin-right: 30px;
        cursor: pointer;
    }
    .login-title{
        display: flex;
        justify-content: space-between;
    }

    .login-type{
        width: 890px;
        height: 334px;
        display: flex;
    }

    .login-phone{
        position: relative;
        border-right: 1px solid #eff1f3;
        height: 240px;
    }

    .login-phone-text{
        margin-top: 40px;
        margin-bottom: 10px;
        margin-left: 50px;
    }

    .login-phone-text span{
        font-size:20px;
    }

    .login-phone-input{
        margin-left: 50px;
        margin-top: 20px;
        padding-right:80px ;
    }

    .login-phone-input input{
        width: 300px;
        height: 40px;
        border-radius: 5px;
    }

    .login-phone-input a{
        position: absolute;
        right: 90px;
        top: 150px;
    }

    .login-button{
        width: 300px;
        height: 40px;
        margin-top: 10px;
        margin-left: 50px;
        background-color: #ffd000;
        border-radius: 5px;
        cursor: pointer;
    }

    .code{
        width: 150px;
        height: 150px;
        margin-left: 150px;
        margin-top: 30px;
    }
    .code img{
        width: 150px;
        height: 150px;
    }

    .code-text{
        margin-top: 10px;
        margin-left: 150px;
    }
    
    .code-text p:nth-of-type(2){
        margin-left: 40px;
        margin-top: 10px;
    }

    .code-text p:nth-of-type(n){
        font-size: 15px;
    }

    .login-agree{
        margin-left: 280px;
    }

    .login-agree a{
        text-decoration: none;
    }
</style>
