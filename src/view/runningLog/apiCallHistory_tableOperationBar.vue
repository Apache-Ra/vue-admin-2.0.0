<template>
  <div class="tableOperatingBar">
    <el-form ref="barForm" :model="barForm" label-position="left" label-width="100px">
      <el-form-item class="formItem" label="记录数" label-width="60px">
        <el-input class="minInput" v-model="barForm.ApplicationSerialNumber" placeholder="0"></el-input>
        <el-input class="minInput" v-model="barForm.ApplicationSerialNumber" placeholder="10000"></el-input>
      </el-form-item>

      <el-form-item class="formItem" label="调用状态" label-width="80px">
        <el-input v-model="barForm.ApplicationSerialNumber"></el-input>
      </el-form-item>
      <el-form-item label="最近修改时间" class="formItem el-form-group-item">
        <el-date-picker v-model="barForm.startTime" type="datetime" placeholder="选择起始日期时间"
                        :defaultTime="defaultTime"></el-date-picker>
        <el-date-picker v-model="barForm.endTime" type="datetime" placeholder="选择终止日期时间"
                        :defaultTime="defaultTime"></el-date-picker>
      </el-form-item>
      <!----->
      <el-button type="primary" size="medium" @click="handleBarForm">查询</el-button>
      <el-button size="medium">全部</el-button>
    </el-form>
  </div>
</template>

<script>

export default {
  title: '运行日志/短信发送状态 表格查询条件组件',
  name: "SMS_sendingStatus_tableOperationBar",
  components: {},
  data() {
    return {
      barForm: {},
      defaultTime: '00:00:00'
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleBarForm () {}
  }
}
</script>

<style lang="less" scoped>
  .tableOperatingBar{ text-align: left;
    .el-form-item{width: 20%;display: inline-block; }
    .el-date-editor{width: 100%}
    .el-form-group-item{width: 38%;
      .el-date-editor{width: 48%;} }
    .el-group-item{width: 30%}
    .formGroup{display: flex;
      .el-input{width: 50%;display: inline-block;}
      .el-select{display: inline-block;}
    }
    .minInput{width: 45%}
  }
</style>
