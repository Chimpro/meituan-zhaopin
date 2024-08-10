<template>
    <div class="container">
        <div class="jobDsc">全部社招职位(3221)</div>
        <div class="jobs">
            <div class="job">
                <div class="jobcontain" @click="goJobDsc">
                    <div class="name">品类规划TL</div>
                    <div class="box">社招<span>|</span>北京市<span>|</span>更新于2024/08/10<span>|</span>快驴事业部</div>
                    <div class="duty">
                        <div class="title">岗位职责</div>
                        <div class="desc">1.负责各品类的策略制定，包括不局限于品类策略，品类规划，选品逻辑</div>
                        <div class="desc">2.基于业务理解和发展需求，不断完善各项经营和运营指标体系；并对数据监控和分析..</div>
                    </div>
                </div>
            </div>
            <div class="job">
                <div class="jobcontain">
                    <div class="name">【北斗】大模型推理引擎工程师</div>
                    <div class="box">应届<span>|</span>北京市<span>|</span>更新于2024/07/25</div>
                    <div class="duty">
                        <div class="title">岗位职责</div>
                        <div class="desc">1.负责LLM大语言模型的推理优化</div>
                        <div class="desc">2.负责机器学习引擎的编译优化</div>
                    </div>
                </div>
            </div>
            <div class="job">
                <div class="jobcontain">
                    <div class="name">【北斗】大模型推理引擎工程师</div>
                    <div class="box">应届<span>|</span>北京市<span>|</span>更新于2024/07/25</div>
                    <div class="duty">
                        <div class="title">岗位职责</div>
                        <div class="desc">1.负责LLM大语言模型的推理优化</div>
                        <div class="desc">2.负责机器学习引擎的编译优化</div>
                    </div>
                </div>
            </div>
            <div class="job">
                <div class="jobcontain">
                    <div class="name">【北斗】大模型推理引擎工程师</div>
                    <div class="box">应届<span>|</span>北京市<span>|</span>更新于2024/07/25</div>
                    <div class="duty">
                        <div class="title">岗位职责</div>
                        <div class="desc">1.负责LLM大语言模型的推理优化</div>
                        <div class="desc">2.负责机器学习引擎的编译优化</div>
                    </div>
                </div>
            </div>
            <div class="job">
                <div class="jobcontain">
                    <div class="name">【北斗】大模型推理引擎工程师</div>
                    <div class="box">应届<span>|</span>北京市<span>|</span>更新于2024/07/25</div>
                    <div class="duty">
                        <div class="title">岗位职责</div>
                        <div class="desc">1.负责LLM大语言模型的推理优化</div>
                        <div class="desc">2.负责机器学习引擎的编译优化</div>
                    </div>
                </div>
            </div>
            <div class="job">
                <div class="jobcontain">
                    <div class="name">【北斗】大模型推理引擎工程师</div>
                    <div class="box">应届<span>|</span>北京市<span>|</span>更新于2024/07/25</div>
                    <div class="duty">
                        <div class="title">岗位职责</div>
                        <div class="desc">1.负责LLM大语言模型的推理优化</div>
                        <div class="desc">2.负责机器学习引擎的编译优化</div>
                    </div>
                </div>
            </div>
            <div class="job">
                <div class="jobcontain">
                    <div class="name">【北斗】大模型推理引擎工程师</div>
                    <div class="box">应届<span>|</span>北京市<span>|</span>更新于2024/07/25</div>
                    <div class="duty">
                        <div class="title">岗位职责</div>
                        <div class="desc">1.负责LLM大语言模型的推理优化</div>
                        <div class="desc">2.负责机器学习引擎的编译优化</div>
                    </div>
                </div>
            </div>
            <div class="job">
                <div class="jobcontain">
                    <div class="name">【北斗】大模型推理引擎工程师</div>
                    <div class="box">应届<span>|</span>北京市<span>|</span>更新于2024/07/25</div>
                    <div class="duty">
                        <div class="title">岗位职责</div>
                        <div class="desc">1.负责LLM大语言模型的推理优化</div>
                        <div class="desc">2.负责机器学习引擎的编译优化</div>
                    </div>
                </div>
            </div>
            <div class="job">
                <div class="jobcontain">
                    <div class="name">【北斗】大模型推理引擎工程师</div>
                    <div class="box">应届<span>|</span>北京市<span>|</span>更新于2024/07/25</div>
                    <div class="duty">
                        <div class="title">岗位职责</div>
                        <div class="desc">1.负责LLM大语言模型的推理优化</div>
                        <div class="desc">2.负责机器学习引擎的编译优化</div>
                    </div>
                </div>
            </div>
            <div class="job">
                <div class="jobcontain">
                    <div class="name">【北斗】大模型推理引擎工程师</div>
                    <div class="box">应届<span>|</span>北京市<span>|</span>更新于2024/07/25</div>
                    <div class="duty">
                        <div class="title">岗位职责</div>
                        <div class="desc">1.负责LLM大语言模型的推理优化</div>
                        <div class="desc">2.负责机器学习引擎的编译优化</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js" name="SocialDsc">
    import { useRouter } from 'vue-router';
    const router = useRouter()
    function goJobDsc(){
        router.push('/jobdsc')
    }
</script>

<style scoped>
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