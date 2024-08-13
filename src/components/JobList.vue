<template>
        <div class="container">
        <div class="jobDsc">{{jobName}}</div>
        <div class="jobs">
            <div class="job" v-for="item in items" @click="goJobDsc(item)">
                <div class="jobcontain">
                    <div class="name">{{item.name}}</div>
                    <div class="box">{{item.undergrate}}<span>|</span>{{item.address}}<span>|</span>{{item.time}}</div>
                    <div class="duty">
                        <div class="title">{{item.duty}}</div>
                        <div class="desc">{{ item.desc1 }}</div>
                        <div class="desc">{{ item.desc2 }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js" name="JobList">
    import { useRouter } from 'vue-router';
    const router = useRouter()
    function goJobDsc(jobInfo){
        router.push({
            path:'/jobdsc',
            query:jobInfo
        })
        console.log(jobInfo)
    }
    defineProps(['items','jobName'])
</script>

<style>
    .container{
        width: 988px;
        margin-left: 80px;
    }
    .jobDsc{
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 30px;
    }
    .jobcontain{
        height: 220px;
        width: 988px;
        border-radius: 10px;
        cursor:pointer;
    }

    .jobcontain:hover{
        box-shadow: 4px 20px 40px 5px rgba(0, 0, 0, .1);
    }

    .name{
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: bold;
    }

    .box{
        font-size: 15px;
        margin-bottom: 5px;
        margin-left: 10px;
    }
    .box span{
        color: grey;
        padding: 10px;
    }
    
    .duty{
        margin-left: 10px;
        margin-top: 5px;
    }
    .title{
        margin-top: 10px;
        margin-bottom: 5px;
        font-weight: bold;
    }

    .desc{
        margin-top: 5px;
        font-size:15px;
        color: grey;
    }
</style>