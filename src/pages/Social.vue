<template>
    <div class="Bei-top">
        <div class="Bei-introduction">
            <div class="Bei-CN">社会招聘</div>
            <div class="Bei-EN">Experienced Recruitment</div>
            <div class="Bei-dsc">社会招聘主要面向有一定工作经验的优秀人才。聚焦“零售 + 科技”战略，美团为优秀人才提供了更丰富的机会、更广阔的发展空间，欢迎大家与我们一起在多元的业务场景中学习实践，一起“帮大家吃得更好，生活更好”！</div>
        </div>
        <div class="Bei-search">
            <input type="text" placeholder="根据关键词搜索岗位">
            <button><span class="iconfont icon-search" style="height: 50px; width: 50px;"></span></button>
        </div>
    </div>
    <div style="display: flex;">
        <Sift/>
        <SocialDsc/>
    </div>  
</template>

<script setup lang="js" name="Social">
    import Sift from './Sift.vue'
    import SocialDsc from './SocialDsc.vue';
    
</script>

<style>
        .Bei-top{
        position: relative;
    }

    .Bei-introduction{
        height: 476px;
        background-image:url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/bg/social.png) ;
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