<template>
  <el-container class="waitingQueue con">
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
    {label:'发送类型', name: 'sendType'},
    {label:'等待队列消息数', name: 'numberOfWaitingMessages'},
    {label:'创建时间', name: 'creationTime'}
  ]
  // 表格假数据
  import Data from '../../mock/channelManagement'
  // 面包屑
  import breadCrumbBar from '../../components/breadCrumbBar'
  // 表格查询条件组件
  import TableOperationBar from './waitingQueue_tableOperationBar'
  // 常规表格
  import TableBar from '../../components/tableBar'
  export default {
    title:'等待队列',
    name: "waitingQueue",
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
