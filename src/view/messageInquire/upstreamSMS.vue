<template>
  <el-container class="upstreamSMS con">
    <el-header>
      <!--面包屑-->
      <breadCrumbBar></breadCrumbBar>
    </el-header>
    <el-main class="content">
      <!--表格操作（查询和添加）-->
      <TableOperationBar @handleTableOperation="handleTableOperation"></TableOperationBar>
      <!--表格部分-->
      <tableBar :tableTitleData="tableTitleData" :tableData="tableData"></tableBar>
    </el-main>
    <!--弹出层-->
  </el-container>
</template>

<script>
  /**
   * 表格表头数据
   */
  const tableTitleData = [
    {label:"发送流水号", name: "sendSerialNumber"},
    {label:"渠道类型", name: "channelType"},
    {label:"发送者", name: "sender"},
    {label:"接收者", name: "recipient"},
    {label:"回复内容", name: "replyContent"},
    {label:"回复时间", name: "responseTime"},
    {label:"记录创建时间", name: "recordCreationTime"},
    {label:"记录修改时间", name: "recordModificationTime"}
  ]
  // 表格假数据
  import Data from '../../mock/messageInquire'
  // 面包屑
  import breadCrumbBar from '../../components/breadCrumbBar'
  // 表格操作组件
  import TableOperationBar from './tableOperationBar_'
  // 常规表格
  import tableBar from '../../components/tableBar'
  export default {
    title: '上行短信',
    name: 'upstreamSMS',
    components: {breadCrumbBar, TableOperationBar, tableBar},
    data() {
      return {
        tableTitleData: tableTitleData,
        tableData: Data.data.upstreamSMS
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      handleTableOperation () {}
    }
  }
</script>

<style scoped>

</style>
