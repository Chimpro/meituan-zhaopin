<template>
    <div class="Bei-top">
        <RecruitTop :chTitle="chTitle" :enTitle="enTitle" :titleDesc="titleDesc"/>
    </div>
    <div style="display: flex;">
        <SiftCity/>
        <JobList :items="items" :jobName="jobName"/>
    </div>
</template>

<script setup lang="js" name="Social">
    import SiftCity from '@/components/SiftCity.vue';
    import JobList from '@/components/JobList.vue';
    import RecruitTop from '@/components/RecruitTop.vue';
    const chTitle = '社会招聘'
    const enTitle = 'Experienced Recruitment'
    const titleDesc = '社会招聘主要面向有一定工作经验的优秀人才。聚焦“零售 + 科技”战略，美团为优秀人才提供了更丰富的机会、更广阔的发展空间，欢迎大家与我们一起在多元的业务场景中学习实践，一起“帮大家吃得更好，生活更好”！'
    const jobName = '全部社招职位（3194）'
    const items = [
        {
        name:'品类规划TL',
        undergrate:'社招',
        address:'北京',
        time:'更新于2024/08/10',
        duty:'岗位职责',
        desc1:'1.负责各品类的策略制定，包括不局限于品类策略，品类规划，选品逻辑',
        desc2:'2.基于业务理解和发展需求，不断完善各项经营和运营指标体系；并对数据监控和分析..'            
        },
        {
        name:'【北斗】大模型推理引擎工程师',
        undergrate:'应届',
        address:'北京',
        time:'更新于2024/07/25',
        duty:'岗位职责',
        desc1:'1.负责LLM大语言模型的推理优化',
        desc2:'2.负责机器学习引擎的编译优化'
    },
    {
        name:'【北斗】大模型推理引擎工程师',
        undergrate:'应届',
        address:'北京',
        time:'更新于2024/07/25',
        duty:'岗位职责',
        desc1:'1.负责LLM大语言模型的推理优化',
        desc2:'2.负责机器学习引擎的编译优化'
    },
    {
        name:'【北斗】大模型推理引擎工程师',
        undergrate:'应届',
        address:'北京',
        time:'更新于2024/07/25',
        duty:'岗位职责',
        desc1:'1.负责LLM大语言模型的推理优化',
        desc2:'2.负责机器学习引擎的编译优化'
    },
    {
        name:'【北斗】大模型推理引擎工程师',
        undergrate:'应届',
        address:'北京',
        time:'更新于2024/07/25',
        duty:'岗位职责',
        desc1:'1.负责LLM大语言模型的推理优化',
        desc2:'2.负责机器学习引擎的编译优化'
    },
    {
        name:'【北斗】大模型推理引擎工程师',
        undergrate:'应届',
        address:'北京',
        time:'更新于2024/07/25',
        duty:'岗位职责',
        desc1:'1.负责LLM大语言模型的推理优化',
        desc2:'2.负责机器学习引擎的编译优化'
    },
    {
        name:'【北斗】大模型推理引擎工程师',
        undergrate:'应届',
        address:'北京',
        time:'更新于2024/07/25',
        duty:'岗位职责',
        desc1:'1.负责LLM大语言模型的推理优化',
        desc2:'2.负责机器学习引擎的编译优化'
    },
    {
        name:'【北斗】大模型推理引擎工程师',
        undergrate:'应届',
        address:'北京',
        time:'更新于2024/07/25',
        duty:'岗位职责',
        desc1:'1.负责LLM大语言模型的推理优化',
        desc2:'2.负责机器学习引擎的编译优化'
    },
    {
        name:'【北斗】大模型推理引擎工程师',
        undergrate:'应届',
        address:'北京',
        time:'更新于2024/07/25',
        duty:'岗位职责',
        desc1:'1.负责LLM大语言模型的推理优化',
        desc2:'2.负责机器学习引擎的编译优化'
    },
    {
        name:'【北斗】大模型推理引擎工程师',
        undergrate:'应届',
        address:'北京',
        time:'更新于2024/07/25',
        duty:'岗位职责',
        desc1:'1.负责LLM大语言模型的推理优化',
        desc2:'2.负责机器学习引擎的编译优化'
    },
    ]
</script>

<style>
    .Bei-top{
        position: relative;
    }
</style>