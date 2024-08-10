<template>
    <div class="sift">
        <div class="sift-left">
            <el-col :span="12">
      <h5 class="mb-2" style="font-size: 20px;text-align: center;margin-top: 10px;font-weight: bold;">筛选</h5>
      <el-divider class="divider"/>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>所在城市</span>
          </template>
          <span class="city">北京</span><span class="city">上海</span><br>
          <span class="city">深圳</span><span class="city">成都</span><br>
          <span class="city">广州</span><span class="city">武汉</span><br>
          <span class="city">杭州</span><span class="city">西安</span><br>
          <span class="city">重庆</span><span class="city">南京</span><br>
          <span class="city">厦门</span><span class="city">郑州</span>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>职位类别</span>
          </template>
          <el-sub-menu index="1-1">
            <template #title>技术类</template>
            <span>全部</span><span>测试</span><br>
            <span>运维</span><span>算法</span><br>
            <span>硬件</span><span>软件</span>
          </el-sub-menu>
          <el-sub-menu index="1-2">
            <template #title>产品类</template>
            <span>全部</span><span>功能产品</span><br>
            <span>策略产品</span><span>数据产品</span><br>
            <span>工具产品</span><span>硬件产品</span>
          </el-sub-menu>
          <el-sub-menu index="1-3">
            <template #title>商业分析类</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-4">
            <template #title>零售类</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-5">
            <template #title>运营类</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-6">
            <template #title>设计类</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-7">
            <template #title>市场营销类</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-8">
            <template #title>职能类</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-9">
            <template #title>金融类</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-10">
            <template #title>销售、客服与支持类</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="1-11">
            <template #title>综合类</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>部门</span>
          </template>
          <div>核心本地商业</div>
          <div>SaaS事业部</div>
          <div>充电宝业务部</div>
          <div>优选事业部</div>
          <div>快驴事业部</div>
          <div>小象事业部</div>
          <div>点评事业部</div>
          <div>自行车配送部</div>
          <div>无人机业务部</div>
          <div>骑行事业部</div>
          <div>金融服务平台</div>
          <div>战略与投资平台</div>
          <div>财务平台</div>
          <div>公司事务平台</div>
          <div>人力资源平台</div>
          <div>境外业务</div>
        </el-sub-menu>
      </el-menu>
            </el-col>
        </div>
        <div class="sift-right">

        </div>
    </div>
    
</template>

<script setup lang="js" name="Sift">
    
</script>

<style>
    .el-menu-vertical-demo{
        width: 236px;
        height:2338px
    }

    .divider{
        width: 236px;
    }

    .city{
      display: inline-block;
      height: 20px;
      margin-left: 20px;
      padding-top:1px ;
      width: 80px;
      text-align: center;
      margin-top: 10px;
      border-radius: 5px;
      background-color: #f4f5f7;
      cursor: pointer;
    }
</style>