<template>  
    <div class="container">
        <div class="top">
            <div class="title-detail">
                <div class="title-left">
                    <div class="left-top">【北斗】大模型推理引擎工程师<span>应届-北斗计划</span></div>
                    <div class="left-mid">工作地点：北京市</div>
                    <div class="left-bot"><span>!</span>最多可投递三个职位，但同一时间仅有1个职位流程处于进行中，第一志愿将被优先考虑。</div>
                </div>
                <div class="title-right">
                    <div class="share">分享</div>
                    <div class="apply">立即申请</div>
                </div>
            </div>
        </div>
        <div class="detail">
            <div>
                <div class="duty-title">岗位职责</div>
                <div>
                    <p class="details">1.负责LLM大语言模型的推理优化</p>
                    <p class="details">2.负责机器学习引擎的编译优化工作</p>
                    <p class="details">3.负责模型稀疏化和模型量化工作</p>
                </div>
            </div>
            <div>
                <div class="duty-title">任职要求</div>
                <div>
                    <p class="details">1.熟练掌握CUDA编程、C++编程，数据结构和算法知识</p>
                    <p class="details">2.熟悉TVM或TensorRT或FastTransformer等推理优化框架</p>
                    <p class="details">3.熟悉LLM大模型相关背景知识，有相关方向的研究经验和产出</p>
                </div>
                <div style="font-size: 20px; line-height: 150%; margin-top: 10px;">岗位亮点：</div>
                <div>
                    <p class="details">1.紧跟人工智能行业进展，接触到前沿技术和行业趋势，磨练出对人工智能的独到见解；</p>
                    <p class="details">2.参与AI大模型的数据、训练与评测的全流程，了解从理论到工程实践的全面技能；</p>
                    <p class="details">3.有机会参与公司的创新项目，跨足不同领域，拓宽人工智能技术的应用范围。</p>
                </div>
            </div>
            <div>
                <div class="duty-title">工作城市</div>
                <div>北京市</div>
            </div>
        </div>
    </div>

</template>

<script setup lang="js" name="JobDsc">

</script>

<style scoped>
    .container{
        height: 798px;
    }

    .top{
        padding-top: 40px;
        height: 200px;
        position: sticky;
        top: 0px;
        background-color: white;
    }

    .title-detail{
        width: 1280px;
        height: 200px;
        display: flex;
        justify-content: space-between;
    }

    .title-left{
        margin-left: 80px;
    }

    .left-top{
        font-size: 25px;
        font-weight: bold;
    }

    .left-top span{
        margin-left: 20px;
        font-size: 15px;
        color:#009155 ;
        background-color: #edfaf4;
    }

    .left-mid{
        margin-top: 15px;
        margin-bottom: 15px;
        color:#aeaeae;
    }

    .left-bot{
        width: 610px;
        height: 38px;
        font-size: 14px;
        background-color:#f0f6ff;
        text-align: center;
        padding-top: 10px;
        border-radius: 10px;
    }

    .left-bot span{
        margin-right: 10px;
        color: white;
        background-color: #166ff7;
        border-radius: 50%;
        display: inline-block;
        width: 14px;
    }

    .title-right{
        display: flex;
    }

    .share{
        border: 0.5px solid grey;
        border-radius: 5px;
        width:100px;
        height: 40px;
        text-align: center;
        padding-top: 10px;
        cursor: pointer;
    }

    .apply{
        background-color:#ffd000 ;
        border-radius: 5px;
        width:100px;
        height: 40px;
        text-align: center;
        padding-top: 10px;
        margin-left: 20px;
        cursor: pointer;
    }

    .detail{
        margin-left: 80px;
    }

    .duty-title{
        font-size: 20px;
        font-weight: bold;
        line-height: 150%;
        margin-top: 30px;
    }

    .details{
        font-size: 18px;
        line-height: 150%;
    }
    </style>