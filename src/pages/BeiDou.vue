<template>
    <div class="Bei-top">
        <div class="Bei-introduction">
            <div class="Bei-CN">北斗计划</div>
            <div class="Bei-EN">Beidou Program</div>
            <div class="Bei-dsc">北斗计划是美团面向全球精尖校园科技人才的招聘项目，目标是基于美团多元的业务场景和广阔的职业平台，培养及储备能引领未来科技发展的技术专家，携手打造多层次科技服务平台。该项目自启动以来，吸引了海内外高校诸多优秀科技人才加入，经过多年的耕耘及沉淀，逐渐形成了助力专业人才成长和发展的项目体系。现诚邀各技术领域的优秀同学加入“北斗计划”，一起成长，一起更好，共同践行“帮大家吃得更好，生活更好”的使命</div>
        </div>
        <div class="Bei-search">
            <input type="text" placeholder="根据关键词搜索岗位">
            <button><span class="iconfont icon-search" style="height: 50px; width: 50px;"></span></button>
        </div>
    </div>
        <div style="display: flex;">
            <Sift/>
            <BeiDouDsc/>
        </div>
    
</template>

<script setup lang="js" name="BeiDou">
    import Sift from '@/pages/Sift.vue'
    import BeiDouDsc from './BeiDouDsc.vue';
</script>

<style scoped>
    .Bei-top{
        position: relative;
    }

    .Bei-introduction{
        height: 476px;
        background-image:url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/bg/beidou.png) ;
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