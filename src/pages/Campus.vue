<template>
    <div class="Bei-top">
        <RecruitTop :chTitle="chTitle" :enTitle="enTitle" :titleDesc="titleDesc"/>
    </div>
    <div style="display: flex;">
        <SiftCity/>
        <JobList :items="items" :jobName="jobName"/>
    </div>
</template>

<script setup lang="js" name="Campus">
    import SiftCity from '@/components/SiftCity.vue';
    import JobList from '@/components/JobList.vue';
    import RecruitTop from '@/components/RecruitTop.vue';
    const chTitle = '校园招聘'
    const enTitle = 'Campus Recruiment'
    const titleDesc = '美团有多少年，校招就有多少年。美团创立之初，就开始招聘和培养应届生了，很多当年的应届生已经成长为业务骨干、团队负责人，成为美团的中流砥柱。 目前，校园招聘设有应届生校招、转正实习、日常实习等招聘项目。无论你在哪个年级、学什么专业，都有机会来美团学习实践，和我们一起成长，一起更好！'
    const jobName = '全部校招职位(294)'
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