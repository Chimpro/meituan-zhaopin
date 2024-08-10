<template>
    <div class="Bei-top">
        <div class="Bei-introduction">
            <div class="Bei-CN">校园招聘</div>
            <div class="Bei-EN">Campus Recruiment</div>
            <div class="Bei-dsc">美团有多少年，校招就有多少年。美团创立之初，就开始招聘和培养应届生了，很多当年的应届生已经成长为业务骨干、团队负责人，成为美团的中流砥柱。 目前，校园招聘设有应届生校招、转正实习、日常实习等招聘项目。无论你在哪个年级、学什么专业，都有机会来美团学习实践，和我们一起成长，一起更好！</div>
        </div>
        <div class="Bei-search">
            <input type="text" placeholder="根据关键词搜索岗位">
            <button><span class="iconfont icon-search" style="height: 50px; width: 50px;"></span></button>
        </div>
    </div>
    <div style="display: flex;">
        <Sift/>
        <CampusDsc/>
    </div>
</template>

<script setup lang="js" name="Campus">
    import Sift from './Sift.vue'
    import CampusDsc from './CampusDsc.vue';
</script>

<style>
        .Bei-top{
        position: relative;
    }

    .Bei-introduction{
        height: 476px;
        background-image:url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/bg/campus.png) ;
        color: white;
        
    }
    .Bei-CN{
        font-size: 40px;
        position: absolute;
        top: 100px;
        left: 30px;
    }
    .Bei-EN{
        font-size: 18px;
        color: #8a8a8a;
        position: absolute;
        top: 150px;
        left: 30px;
    }
    .Bei-dsc{
        font-size: 15px;
        width: 740px;
        height: 88px;
        line-height: 140%;
        position: absolute;
        top: 200px;
        left: 30px;
    }

    .Bei-search{
        position: absolute;
        top: 350px;
        left: 30px;
    }
    .Bei-search input{
        width: 600px;
        height: 60px;
        border-radius: 20px;
    }

    .Bei-search button{
        width: 55px;
        height: 55px;
        border-radius: 50%;
        position: absolute;
        left: 540px;
        top: 3px;
        background-color: #ffd000;
    }
</style>