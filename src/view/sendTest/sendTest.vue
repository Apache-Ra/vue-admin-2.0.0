<template>
  <el-container class="sendTest con">
    <el-header>
      <!--面包屑-->
      <el-breadcrumb separator="/" class="breadCrumbBar">
        <el-breadcrumb-item>发送测试</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main class="content">
      <el-row>
        <el-col :span="12">
          <TestConditionsBar></TestConditionsBar>
        </el-col>
        <el-col :span="12">
          <TestResultsBar></TestResultsBar>
        </el-col>
      </el-row>
    </el-main>
    <!--弹出层-->
  </el-container>
</template>

<script>
  // 表格假数据
  import Data from '../../mock/channelManagement'
  // 面包屑
  import breadCrumbBar from '../../components/breadCrumbBar'
  //测试条件组件
  import TestConditionsBar from './testConditionsBar'
  //测试结果组件
  import TestResultsBar from './testResultsBar'
  export default {
    title:'发送测试',
    name: 'sendTest',
    components: {breadCrumbBar, TestConditionsBar, TestResultsBar},
    data() {
      return {}
    },
    created() {
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped>

</style>
