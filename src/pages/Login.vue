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
                    <el-form ref="form" :model="loginForm" :rules="loginRules" label-width="auto" style="max-width: 600px">
                        <div class="login-phone-input">
                            <el-form-item prop="mobile">
                                <el-input v-model="loginForm.mobile" style="width: 300px" placeholder="请输入手机号" />
                            </el-form-item>
                        </div>
                        <div class="login-phone-input">
                            <el-form-item prop="authcode">
                                <el-input v-model="loginForm.authcode" style="width: 300px" placeholder="请输入验证码" />
                                <a href="#">验证码</a>
                            </el-form-item>
                        </div>
                        <div class="login-button">
                            <el-form-item>
                                <el-button @click="login" color="#ffd000" size="large">立即登录</el-button>
                            </el-form-item>
                        </div>
                    </el-form>
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
    import {ref} from 'vue'
    import { useRouter } from 'vue-router';
    const router = useRouter()
    function backstep(){
        window.history.back(-1);
    }
    let form = ref()
    const loginForm = ref({
        mobile:'',
        authcode:'',
    })

    const loginRules = ref({
        mobile:[{
            required:true,
            message:'请输入手机号'
        },{
            pattern:/^1[2-9]\d{9}$/,
            message:'请输入正确格式的手机号'
        }],
        authcode:[{
            required:true,
            message:'请输入验证码'
        },{
            pattern:/\d{4}$/,
            message:'请输入正确的验证码'
        }]
    })

    function login(){
        form.value.validate((isOK)=>{
            if(isOK){
                router.push('/Home')
                localStorage.setItem("loginForm.mobile","loginForm.authcode")
            }
        })
    }
</script>

<style scoped>
    .container{
        background-color:#ffd000 ;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .loginComponentWrap{
        display: flex;
        margin-top: 100px;
        width: 1280px;
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
        right: 10px;
        top: 0px;
    }

    .login-button{
        width: 300px;
        height: 40px;
        margin-top: 10px;
        margin-left: 50px;
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
