<template>
        <div class="navigate">
        <div>
            <img src="./assets/img/navigate-logo.png" id="navigateImg">
        </div>
        <div id="navigate-middle">
            <RouterLink to="Home" class="navigate-items">首页</RouterLink>
            <RouterLink to="BeiDou" class="navigate-items">北斗计划</RouterLink>
            <RouterLink to="Social" class="navigate-items">社会招聘</RouterLink>
            <RouterLink to="Campus" class="navigate-items">校园招聘</RouterLink>
            <RouterLink to="Campus" class="navigate-items">工作兼职</RouterLink>
            <RouterLink to="Campus" class="navigate-items">了解美团</RouterLink>
            <RouterLink to="Campus" class="navigate-items">常见问题</RouterLink>
        </div>
        <div>
            <button id="En">English</button>
            <button id="login" @click="goLogin()">登录</button>
        </div>
        </div>
</template>

<script setup lang="js" name="Navigate">
    import { RouterLink,useRouter } from 'vue-router';
    const router = useRouter()
    function goLogin(){
        router.push('/Login')
    }
</script>

<style>
    .navigate{
        display: flex;
        justify-content: space-around;
        height:78px;
        background-color: white;
    }
    .navigate-items{
        text-decoration: none;
        color: black;
        font-size: 20px;
        margin-right: 20px;
    }
    #navigateImg{
        margin-top: 10px;
        width: 232px;
    }
    #navigate-middle{
        display: flex;
        margin-top: 20px;
    }

    #En,#login{
        width: 80px;
        height: 32px;
        margin-top: 20px;
        margin-right: 10px;
        border-radius: 10px;
        cursor: pointer;
    }

    #En{
        background-color:transparent;
    }

    #login{
        background-color: #ffd000;
        border:none
    }
</style>