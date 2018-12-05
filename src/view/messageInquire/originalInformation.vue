<template>
  <el-container class="originalInformation con">
    <el-header>
      <!--面包屑-->
      <breadCrumbBar></breadCrumbBar>
    </el-header>
    <el-main class="content">
      <!--表格操作（查询和添加）-->
      <TableOperationBar @handleTableOperation="handleTableOperation"></TableOperationBar>
      <!--表格部分-->
      <tableExpansionBar :tableTitleData="tableTitleData" :tableData="tableData"></tableExpansionBar>
    </el-main>
    <!--弹出层-->
  </el-container>
</template>

<script>
/**
 * 表格表头数据
 */
const tableTitleData = {
  tableTitle:[
    {label:'渠道流水号', name: 'channelSerialNumber'},
    {label:'应用流水号', name: 'applicationSerialNumber'},
    {label:'渠道类型', name: 'channelType'},
    {label:'发送类型', name: 'sendType'},
    {label:'计划开始时间', name: 'planStartTime'},
    {label:'计划结束时间', name: 'planEndTime'},
    {label:'优先级', name: 'priority'},
    {label:'应用标识', name: 'representation'},
    {label:'发送者', name: 'sender'},
    {label:'接收者', name: 'recipient'},
    {label:'消息类型', name: 'messageType'},
    {label:'消息内容', name: 'messageContent'},
    {label:'长消息', name: 'longMessage'},
    {label:'中间件状态码', name: 'middlewareStatusCode'},
    {label:'中间件状态产生时间', name: 'middlewareStatusGenerationTime'},
    {label:'中间件状态写入时间', name: 'middlewareStatusWriteTime'},
    {label:'最终状态码', name: 'finalStatusCode'},
    {label:'最终状态产生时间', name: 'finalStateGenerationTime'},
    {label:'最终状态写入时间', name: 'finalStateWriteTime'},
    {label:'序列号-节点ID', name: 'serialNumber_nodeID'},
    {label:'序列号-时间戳', name: 'serialNumber_timeStamp'},
    {label:'序列号-流水号', name: 'serialNumber_serialNumber'},
    {label:'记录创建时间', name: 'recordCreationTime'},
    {label:'记录修改时间', name: 'recordModificationTime'},
  ],
subTitle:[
    {label:'子流水号', name: 'sub-flowNumber', width: '200'},
    {label:'子短信内容', name: 'sub-textContent'},
    {label:'子短信序列号-节点ID', name: 'sub-SMSSerialNumber_nodeID', width: '200'},
    {label:'子短信序列号-时间戳', name: 'sub-SMSSerialNumber_timeStamp', width: '200'},
    {label:'子短信序列号-流水号', name: 'sub-SMSSerialNumber_serialNumber', width: '200'},
    {label:'最终状态', name: 'finalState', width: '200'}
  ]
}
// 表格假数据
import Data from '../../mock/messageInquire'
// 面包屑
import breadCrumbBar from '../../components/breadCrumbBar'
// 表格操作组件
import TableOperationBar from './_tableOperationBar'
// 带扩展的表格
import tableExpansionBar from '../../components/tableExpansionBar'
export default {
  title:'原始信息',
  name: 'originalInformation',
  components: {breadCrumbBar, TableOperationBar, tableExpansionBar},
  data() {
      return {
        tableTitleData: tableTitleData,
        tableData: Data.data.originalInformation
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
