<template>
    <div class="Bei-top">
        <RecruitTop :chTitle="chTitle" :enTitle="enTitle" :titleDesc="titleDesc"/>
    </div>
    <div style="display: flex;">
        <SiftCity @getDistrict = "getDistrict"/>
        <JobList :items="items" :jobName="jobName"/>
    </div>
</template>

<script setup lang="js" name="Campus">
    import {ref} from 'vue'
    import SiftCity from '@/components/SiftCity.vue';
    import JobList from '@/components/JobList.vue';
    import RecruitTop from '@/components/RecruitTop.vue';
    const chTitle = '校园招聘'
    const enTitle = 'Campus Recruiment'
    const titleDesc = '美团有多少年，校招就有多少年。美团创立之初，就开始招聘和培养应届生了，很多当年的应届生已经成长为业务骨干、团队负责人，成为美团的中流砥柱。 目前，校园招聘设有应届生校招、转正实习、日常实习等招聘项目。无论你在哪个年级、学什么专业，都有机会来美团学习实践，和我们一起成长，一起更好！'
    const jobName = '全部校招职位(294)'
    let _items = [
        {
        name:'服体大模型-Java开发项目实习生-2408',
        undergrate:'应届',
        address:'北京',
        time:'更新于2024/08/10',
        duty:'岗位职责',
        desc1:'1.负责各品类的策略制定，包括不局限于品类策略，品类规划，选品逻辑',
        desc2:'2.基于业务理解和发展需求，不断完善各项经营和运营指标体系；并对数据监控和分析..',            
        detail1:'1、负责大模型在智能客服领域落地的应用场景的开发、调优、测试和维护',
        detail2:'2、负责prompt的编写、调试和维护',
        command1:'1、本科以上学历，具备扎实的编程基础和数据结构算法基础，优秀的编程能力和问题解决能力；',
        command2:'2、优秀的模块设计、抽象能力，能进行系统设计与思考；',
        light1:'前沿探索，业务高速发展',
        light2:'个人成长空间大，技术挑战大'
        },
        {
        name:'UX设计实习生',
        undergrate:'应届',
        address:'上海',
        time:'更新于2024/07/25',
        duty:'岗位职责',
        desc1:'1.负责LLM大语言模型的推理优化',
        desc2:'2.负责机器学习引擎的编译优化',
        detail1:'1、参与生成式 AI 产品的设计工作，包括但不限于文生音频、文生视频、文生 UI、数字人生成等，参与 AI 生成、效果调试、workflow搭建等全流程。',
        detail2:'2、参与 B 端及中后台产品的设计工作，包括但不限于办公产品、数据产品、项目管理产品等，参与需求讨论、设计输出、功能验收等用户体验设计全流程。',
        command1:'1、在校生，设计相关专业，可连续实习3个月以上',
        command2:'2、对生成式 AI 有丰富的个人实践案例。',
        light1:'1、AI与设计工作结合，想像空间巨大，充满挑战和机遇。',
        light2:'2、直接接触体系化的实战方法、完善的培养体系、通畅的发展通道。'
    },
    {
        name:'商品平台前端开发',
        undergrate:'应届',
        address:'上海',
        time:'更新于2024/07/25',
        duty:'岗位职责',
        desc1:'1.参与商家钱包、商家入驻等业务的前端研发工作，项目覆盖Hybrid Web、小程序、PC Web等',
        desc2:'2.参与支付商家业务的质量保障、研发效率提升相关工作。',
        detail1:'1. 了解TypeScript或JavaScript, 以及ES新特性；',
        detail2:'2. 对前端主流框架，如Vue、React等有一定使用经验；',
        command1:'1. 热爱前端技术',
        command2:'2. 对前端自动化有兴趣，或有相关经验；',
        light1:'1.业务体量大、影响广泛，直接服务于广大商户、骑手及消费者；',
        light2:'2.团队技术实力在线，为新人落地创造良好条件；'
    },
    {
        name:'【北斗】大模型推理引擎工程师',
        undergrate:'应届',
        address:'上海',
        time:'更新于2024/07/25',
        duty:'岗位职责',
        desc1:'1.负责LLM大语言模型的推理优化',
        desc2:'2.负责机器学习引擎的编译优化'
    },
    {
        name:'【北斗】大模型推理引擎工程师',
        undergrate:'应届',
        address:'上海',
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
    const items = ref(_items)


    function getDistrict(address){
        items.value = _items.filter(function(item){
            if (item.address == address){
                return item
            }
        })
    }
</script>

<style>
    .Bei-top{
        position: relative;
    }
</style>