<template>
    <div class="Bei-top">
        <RecruitTop :chTitle="chTitle" :enTitle="enTitle" :titleDesc="titleDesc"/>
    </div>
    <div style="display: flex;">
        <SiftCity/>
        <JobList :items="items" :jobName="jobName"/>
    </div>
</template>

<script setup lang="js" name="BeiDou">
    import SiftCity from '@/components/SiftCity.vue';
    import JobList from '@/components/JobList.vue';
    import RecruitTop from '@/components/RecruitTop.vue';
    const chTitle = '北斗计划'
    const enTitle = 'Beidou Program'
    const titleDesc = '北斗计划是美团面向全球精尖校园科技人才的招聘项目，目标是基于美团多元的业务场景和广阔的职业平台，培养及储备能引领未来科技发展的技术专家，携手打造多层次科技服务平台。该项目自启动以来，吸引了海内外高校诸多优秀科技人才加入，经过多年的耕耘及沉淀，逐渐形成了助力专业人才成长和发展的项目体系。现诚邀各技术领域的优秀同学加入“北斗计划”，一起成长，一起更好，共同践行“帮大家吃得更好，生活更好”的使命！'
    const jobName = '全部北斗计划岗位(50)'
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

<style scoped>
    .Bei-top{
        position: relative;
    }
</style>