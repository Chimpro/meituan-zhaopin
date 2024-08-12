<template>
        <div class="Bei-introduction">
            <div class="Bei-CN">{{chTitle}}</div>
            <div class="Bei-EN">{{ enTitle }}</div>
            <div class="Bei-dsc">{{ titleDesc }}</div>
        </div>
        <div class="Bei-search">
            <input type="text" placeholder="根据关键词搜索岗位">
            <button><span class="iconfont icon-search" style="height: 50px; width: 50px;"></span></button>
        </div>
</template>

<script setup lang="js" name="RecruitTop">
    defineProps(['chTitle','enTitle','titleDesc'])
</script>

<style>
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