<template>
    <div class="top">
        <video src="https://s3plus.meituan.net/zhaopin-official-website-prod/video/campusTV/zippedHomeVideo.mp4" class="video" autoplay loop></video>
        <div class="mainWrap">
            <div class="text-Wrap">
                <p class="sloganCn">一起成长，一起更好</p>
                <p class="sloganEn">Grow Together,Better Together</p>
            </div>
            <div class="searchWrap">
                <div class="Bei-search">
                    <input type="text" placeholder="根据关键词搜索岗位">
                    <button><span class="iconfont icon-search" style="height: 50px; width: 50px;"></span></button>
                </div>
            </div>
        </div>
        <div class="recruitWrap">
                    <div class="recruitTypes">
                        <div class="re-big-text">北斗计划</div>
                        <div class="re-main-text">面向全球顶尖校园科技人才的招聘项目，诚邀各技术领域的优秀同学加入</div>
                    </div>
                    <div class="recruitTypes">
                        <div class="re-big-text">社会招聘</div>
                        <div class="re-main-text">面向有一定工作经验的优秀人才</div>
                    </div>
                    <div class="recruitTypes">
                        <div class="re-big-text">校园招聘</div>
                        <div class="re-main-text">面向所有的校园人才，提供多种招聘项目，无论你在哪个年级，都能找到合适岗位</div>
                    </div>
                    <div class="recruitTypes">
                        <div class="re-big-text">日常实习</div>
                        <div class="re-main-text">面向所有在校学生提供的实习项目，实习时间一般不少于两个月</div>
                    </div>
                    <div class="recruitTypes">
                        <div class="re-big-text">工作兼职</div>
                        <div class="re-main-text">美团生态内灵活就业岗位，有骑手、分拣员、司机、推广员，全职兼职都有</div>
                    </div>
                    <div class="recruitTypes" style="color: #b7b9bb;">
                        <div class="re-big-text">转正实习</div>
                        <div class="re-main-text">面向即将参加当年秋招的在校学生，提供转正机会，实习时间一般不少于两个月</div>
                    </div>
        </div>
    </div>

    <div class="productWrap">
        <div class="productContent">
            <div class="productSlogan">
                <h2>产品和服务</h2>
            </div>
            <div class="pruductTypes">
                <div class="pruductType">
                    <div class="productType-logo">
                        <img src="https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/meituan.png" alt="">
                    </div>
                    <div class="productType-text">美团</div>
                </div>
                <div class="pruductType">
                    <div class="productType-logo">
                        <img src="https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/dianping.png" alt="">
                    </div>
                    <div class="productType-text">大众点评</div>
                </div>
                <div class="pruductType">
                    <div class="productType-logo">
                        <img src="https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/waimai.png" alt="">
                    </div>
                    <div class="productType-text">美团外卖</div>
                </div>
                <div class="pruductType">
                    <div class="productType-logo">
                        <img src="https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/shanggou.png" alt="">
                    </div>
                    <div class="productType-text">美团闪购</div>
                </div>
                <div class="pruductType">
                    <div class="productType-logo">
                        <img src="https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/maiyao.png" alt="">
                    </div>
                    <div class="productType-text">美团买药</div>
                </div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
                <div class="pruductType">1</div>
            </div>
        </div>
    </div>

    <div class="resume">
        <div class="resumeContent">
            <div class="resume-slogan">
                <h2>美团简介</h2>
            </div>
            <div class="resume-carousel">
                <el-carousel indicator-position="outside" height="450px" interval="2000">
                    <el-carousel-item v-for="item in 3" :key="item">
                        <h3 text="2xl" justify="center">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>

        </div>
    </div>

    <div class="workIn">
        <div class="work-slogan">
            <h2 class="text">工作在美团</h2>
        </div>
        <div class="wrap-work">
            <div class="grow" >
                <div class="textWrap">
                    <div class="textTitle">
                        人才成长
                    </div>
                    <p class="textDesc">完整的方法论，多元的业务落地场景和顶尖的团队，帮助你在实践中学习，成为更好的自己！</p>
                    <div class="buttonWrap">
                        <button @click="learnMoreWork">了解更多</button>
                    </div>
                </div>
            </div>
            <div class="care">
                <div class="textWrap">
                    <div class="textTitle">
                        人文关怀
                    </div>
                    <p class="textDesc">时刻关心你的工作体验与生活状态，希望你的每一天都丰富而美好！</p>
                    <div class="buttonWrap">
                        <button @click="learnMoreCare">了解更多</button>
                    </div>
                </div>
            </div>
            <div class="activity">
                <div class="textWrap">
                    <div class="textTitle">
                        文化活动
                    </div>
                    <p class="textDesc">与你一起走过每个重要节日，一起庆祝你的每个人生里程碑，一起让生活更好！</p>
                    <div class="buttonWrap">
                        <button @click="learnMoreActivity">了解更多</button>
                    </div>
                </div>
            </div>
            <div class="welfare">
                <div class="textWrap">
                    <div class="textTitle">
                        员工公益
                    </div>
                    <p class="textDesc">美团人相信，每个人都可以做一点好事，在工作中也有机会做公益。</p>
                    <div class="buttonWrap">
                        <button @click="learnMoreWelfare">了解更多</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="question">
        <div class="question-container">
            <div class="often-question">
                <div style="display: flex;justify-content: space-between;">
                    <div class="title">常见问题</div>
                    <div class="more">查看更多></div>
                </div>
                <div>
                    <p>【社招】美团的社招招聘流程是什么？</p>
                    <el-divider border-style="dashed" />
                    <p>【社招】填写简历时有哪些注意事项？</p>
                    <el-divider border-style="dashed" />
                    <p>【校招】本次校招面向哪些同学开放？</p>
                    <el-divider border-style="dashed" />
                    <p>【校招】招聘职位的工作地点在哪儿？</p>
                </div>
            </div>
            <div class="notice">
                <div style="display: flex;justify-content: space-between;">
                    <div class="title">公告</div>
                    <div class="more">查看更多></div>
                </div>
                <div>
                    <p>2024年秋季校园招聘行程介绍</p>
                    <el-divider border-style="dashed" />
                    <p>美团2025届北斗计划启动，让科技走向烟火人间</p>
                    <el-divider border-style="dashed" />
                    <p>来美团启航计划，极速开启面试，早拿offer早入职！欢迎零售类人才</p>
                    <el-divider border-style="dashed" />
                    <p>详解8大技术方向，美团校招技术岗位投递指南来了</p>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup lang="js" name="Home">
    import {useRouter} from 'vue-router'
    const router = useRouter()
    function learnMoreWork(){
        router.replace('/work')
    }
    function learnMoreActivity(){
        router.push('/activity')
    }
    function learnMoreWelfare(){
        router.push('/welfare')
    }
    function learnMoreCare(){
        router.push('/care')
    }
</script>

<style scoped>
    .top{
        height: 720px;
        position: relative;
    }
    .mainWrap{
        width: 640px;
        height: 320px;
        transform: translate(50%);
    }

    .video{
        height: 720px;
        width: 100%;
        position: absolute;
        object-fit:fill
    }

    .text-Wrap{
        padding-top: 80px;
        text-align: center;
    }
    .sloganCn{
        color: white;
        font-size: 60px;
    }
    .sloganEn{
        margin-top: 20px;
        color: white;
        font-size: 40px;
    }

    .Bei-search{
        position: absolute;
        top: 260px;
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
    .recruitWrap{
        width: 1280px;
        height: 192px;
        display: flex;
        background-color: #e8e8e7;
        border-radius: 20px;
        margin-top: 80px;
        margin-left: 4%;
        justify-content:space-around;
        position: absolute;
    }

    .recruitTypes{
        width: 211px;
        height: 192px;
    }

    .re-big-text{
        font-size: 20px;
        padding-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .productWrap{
        height:700px;
        background-image: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/serviceBg.png);
    }

    .productContent{
        width: 1280px;
        height: 560px;
        margin-left: 40px;
    }

    .productSlogan{
        height: 40px;
    }

    .pruductTypes{
        display: flex;
        width: 1280px;
        height: 520px;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;
    }

    .pruductType{
        width: 240px;
        height: 100px;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-content: center;
        margin-left: 10px;
        margin-top: 10px;
        border-radius: 10px;
        cursor: pointer;
    }

    .pruductType:hover{
            box-shadow: 4px 20px 40px 5px rgba(0, 0, 0, .1); 
    }

    .product-logo{
        width: 36px;
        height: 36px;
        transform: translateY(50%);
    }

    .productType-text{
        font-size: 20px;
        margin-top: 25px;
        margin-left: 10px;
    }

    .resume{
        height:680px;
        background-image: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/serviceBg.png);
    }

    .resumeContent{
        width: 1280px;
        height: 680px;
    }

    .resume-slogan{
        height: 40px;
    }

    .resume-carousel{
        position: relative;
        margin: 10px;
        left: 70px;
    }

    .el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    }

    .el-carousel__item:nth-child(1) {
        background-image: url(https://s3plus.sankuai.com/zhaopin-official-website-prod/imgs/homePage/meituan_introduce_responsibility.png);
        background-size: 1260px 450px;
    }

    .el-carousel__item:nth-child(2) {
        background-image:url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/meituan_introduce_2.png);
        background-size: 1260px 450px;
    }

    .el-carousel__item:nth-child(3) {
        background-image:url(https://s3plus.sankuai.com/zhaopin-official-website-prod/imgs/homePage/meituan_introduce_technology.png);
        background-size: 1260px 450px;
    }

    .workIn{
        height:544px;
        background-image: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/serviceBg.png);
    }

    .work-slogan{
        height: 40px;
        margin-left: 20px;
    }

    .wrap-work{
        display: flex;
        height: 464px;
    }

    .textWrap{
        text-align: center;
        margin-top: 420px;
        transition: 1s;
    }

    .textWrap:hover{
        margin-top: 300px;
    }

    .textTitle{
        font-size: 30px;
        color: white;
        cursor: pointer;
    }


    .textDesc{  
        width: 200px;
        font-size: 18px;
        margin-left: 50px;
        margin-top: 20px;
        color: white;
    }
    
    .buttonWrap button{
        width: 150px;
        height: 30px;
        border-radius: 10px;
        background-color: #ffd000;
        cursor: pointer;
    }

    .grow,.care,.activity,.welfare{
        width: 296px;
        height:464px;
        background-color: #e8e8e7;
        margin-left: 40px;
        border-radius: 20px;
        background-size:296px 464px ;
        overflow: hidden;
    }

    .grow{
        background-image: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/grow.png);
    }

    .care{
        background-image: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/care%402x.png);
    }

    .activity{
        background-image: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/activity.png);
    }

    .welfare{
        background-image: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/welfare.png);
    }


    .question{
        height: 464px;
        background-image: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/serviceBg.png);
    }

    .question-container{
        height: 463px;
        width: 1280px;
        display: flex;
        justify-content: space-between;
        padding-top: 50px;
    }

    .often-question,.notice{
        width: 600px;
        height: 323px;
    }

    .title{
        font-size:25px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    .more{
        cursor: pointer;
    }

    .often-question{
        margin-left: 50px;
    }

    .productSlogan,.resume-slogan,.work-slogan{
        font-size: 30px;
        margin-left: 50px;
        font-weight: bold;
        margin-bottom: 30px;
        padding-top: 20px;
    }
</style>