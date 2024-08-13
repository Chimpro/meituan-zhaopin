<template>  
    <div class="container">
        <div class="top">
            <div class="title-detail">
                <div class="title-left">
                    <div class="left-top">{{route.query.name}}<span>应届-北斗计划</span></div>
                    <div class="left-mid">工作地点：{{route.query.address}}</div>
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
                    <p class="details">{{route.query.detail1}}化</p>
                    <p class="details">{{route.query.detail2}}</p>
                </div>
            </div>
            <div>
                <div class="duty-title">任职要求</div>
                <div>
                    <p class="details">{{route.query.command1}}</p>
                    <p class="details">{{route.query.command2}}</p>
                </div>
                <div style="font-size: 20px; line-height: 150%; margin-top: 10px;">岗位亮点：</div>
                <div>
                    <p class="details">{{ route.query.light1 }}</p>
                    <p class="details">{{route.query.light2}}</p>
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
    import { useRoute } from 'vue-router';
    const route = useRoute()
    console.log(route.query,'route')
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