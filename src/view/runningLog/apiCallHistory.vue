<template>
  <el-container class="apiCallHistory con">
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
    {label:'记录数', name: 'records'},
    {label:'调用状态', name: 'cllState'},
    {label:'创建时间', name: 'creationTime'}
  ]
  // 表格假数据
  import Data from '../../mock/channelManagement'
  // 面包屑
  import breadCrumbBar from '../../components/breadCrumbBar'
  // 表格查询条件组件
  import TableOperationBar from './apiCallHistory_tableOperationBar'
  // 常规表格
  import TableBar from '../../components/tableBar'
  export default {
    title:'是接口调用历史',
    name: "apiCallHistory",
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
