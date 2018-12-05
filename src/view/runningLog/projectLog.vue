<template>
  <el-container class="projectLog con">
    <el-header>
      <!--面包屑-->
      <breadCrumbBar></breadCrumbBar>
    </el-header>
    <el-main class="content">
      <!--表格操作（查询和添加）-->
      <TableOperationBar></TableOperationBar>
      <!--表格部分-->
      <TableBar :tableTitleData="tableTitleData" :tableData="tableData"></TableBar>
    </el-main>
    <!--弹出层-->
  </el-container>
</template>

<script>
  /**
   * 表格表头数据
   */
  const tableTitleData = [
    {label:'模块名称', name: 'moduleName'},
    {label:'日志级别', name: 'logLevel'},
    {label:'日志信息', name: 'logInformation'},
    {label:'日志位置', name: 'logLocation'},
    {label:'创建时间', name: 'creationTime'}
  ]
  // 表格假数据
  import Data from '../../mock/channelManagement'
  // 面包屑
  import breadCrumbBar from '../../components/breadCrumbBar'
  // 表格查询条件组件
  import TableOperationBar from './projectLog_tableOperationBar'
  // 常规表格
  import TableBar from '../../components/tableBar'
  export default {
    title:'项目日志',
    name: "projectLog",
    components: {breadCrumbBar, TableOperationBar, TableBar},
    data() {
      return {
        tableTitleData: tableTitleData,
        tableData: []
      }
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
