<template>
  <div class="tableOperatingBar">
    <el-form ref="barForm" :model="barForm" label-position="left" label-width="100px">
      <el-form-item class="formItem" label="发送流水号">
        <el-input v-model="barForm.ApplicationSerialNumber"></el-input>
      </el-form-item>
      <el-form-item label="最近修改时间" class="formItem el-form-group-item">
        <el-date-picker v-model="barForm.startTime" type="datetime" placeholder="选择起始日期时间" :defaultTime="defaultTime"></el-date-picker>
        <el-date-picker v-model="barForm.endTime" type="datetime" placeholder="选择终止日期时间" :defaultTime="defaultTime"></el-date-picker>
      </el-form-item>
      <el-form-item class="formItem" label="渠道类型">
        <el-select v-model="barForm.channelType" placeholder="请选择渠道类型">
          <el-option v-for="(option, key) in channelTypeOptions" :key="key" :label="option.label" :value="option.value"></el-option>
        </el-select>
      </el-form-item>
      <!----->
        <el-button type="primary" size="medium" @click="handleBarForm">查询</el-button>
        <el-button>全部</el-button>
    </el-form>
  </div>
</template>

<script>
  /**
   * 渠道类型
   */
  const channelTypeOptions = [
    {value: '0', label: '全部'},{value: '1', label: '小米'},{value: '2', label: '华为'}
  ]
  export default {
  title: '消息查询/上行短信-操作表格专项组件',
  name: 'tableOperatingBar',
  components: {},
  data() {
    return {
      channelTypeOptions: channelTypeOptions,
      barForm:{
        channelSerialNumber: '',
        ApplicationSerialNumber: '',
        startTime: '',
        endTime: '',
        channelType: ''
      },
      defaultTime: '00:00:00'
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleBarForm () {
      let vue = this
      console.log(vue.barForm)
    }
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
}
</style>
