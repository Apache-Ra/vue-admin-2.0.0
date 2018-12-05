<template>
  <el-container class="operationalIndicator con">
    <el-header>
      <!--面包屑-->
      <breadCrumbBar></breadCrumbBar>
    </el-header>
    <el-main class="content">
      <!--表格操作（查询和添加）-->
      <!--表格部分-->
    </el-main>
    <!--弹出层-->
  </el-container>
</template>

<script>
  // 表格假数据
  import Data from '../../mock/channelManagement'
  // 面包屑
  import breadCrumbBar from '../../components/breadCrumbBar'
  export default {
    title:'运行指标',
    name: 'operationalIndicator',
    components: {breadCrumbBar},
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
